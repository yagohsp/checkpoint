import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";

import { TextInput, Button, ErrorLabel } from "../../components";
import { LoginAccount, SignupForm, SignupWrapper, Title } from "./styles";
import signupValidation from "./signup-validation";
import { createUser } from "../../services/user/authentication";
import { AuthContext } from "../../providers/Auth";

export default function Login() {
  const recaptchaRef = useRef();
  const {currentUser} = useContext(AuthContext);
  const [requestError, setRequestError] = useState({});
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidation),
  });

  const onSubmit = async ({ email, password }) => {
    const token = recaptchaRef.current?.getValue();
    if(!token) {
      setRequestError({recaptcha: "Por favor, verifique o recaptcha acima"});
      return ;
    }
    setIsLoading(true);
    const response = await createUser(email, password);
    setIsLoading(false);
    if (response?.error) {
      setRequestError(response);
      setTimeout(() => {
        setRequestError({});
      }, 2500);
    } else {
      history.go(0);
    }
  };

  return (
    <SignupWrapper>
      <SignupForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Title>Cadastro</Title>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          error={
            errors.email?.message ||
            (requestError.type === "email" && requestError.message)
          }
          {...register("email")}
        />

        <TextInput
          label="Senha"
          placeholder="*********"
          type="password"
          error={
            errors.password?.message ||
            (requestError.type === "password" && requestError.message)
          }
          {...register("password")}
        />

        <TextInput
          label="Repetir senha"
          placeholder="*********"
          type="password"
          error={
            errors.passwordConfirmation?.message ||
            (requestError.type === "passwordConfirmation" && requestError.message)
          }
          {...register("passwordConfirmation")}
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lfj0vIcAAAAADafJvlC85EzFYAj4nWN4uldxWZM"
          onChange={() => setRequestError({})}
        />
        <ErrorLabel error={requestError.recaptcha} />

        <Button
          isLoading={isLoading}
          error={requestError.type === "default" && requestError.message}
          
        >
          Cadastrar-se e entrar
        </Button>

        <LoginAccount to="/login">Já possui conta?</LoginAccount>
      </SignupForm>
    </SignupWrapper>
  );
}
