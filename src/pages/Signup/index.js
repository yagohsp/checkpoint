import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput, Button } from "../../components";
import { LoginAccount, SignupForm, SignupWrapper, Title } from "./styles";
import signupValidation from "./signupValidation";
import { createUser } from "../../services/user/authentication";
import firebaseApp from "../../firebase";

export default function Login() {
  const [requestError, setRequestError] = useState({});
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      }
    });
  }, [history]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidation),
  });

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    const response = await createUser(email, password);
    setIsLoading(false);
    if (response?.error) {
      setRequestError(response);
      setTimeout(() => {
        setRequestError({});
      }, 2500);
    } else {
      history.push("/");
    }
  };

  return (
    <SignupWrapper>
      <SignupForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Title>Signup</Title>

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
