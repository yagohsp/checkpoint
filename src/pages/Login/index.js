import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput, Button } from "../../components";
import { CreateAccount, LoginForm, LoginWrapper, Title } from "./styles";
import loginValidation from "./login-validation";
import { login } from "../../services/user/authentication";
import { AuthContext } from "../../providers/Auth";

export default function Login() {
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
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    const response = await login(email, password);
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
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Title>Login</Title>

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

        <Button
          isLoading={isLoading}
          error={requestError.type === "default" && requestError.message}
        >
          Entrar
        </Button>

        <CreateAccount to="/cadastro">Criar conta</CreateAccount>
      </LoginForm>
    </LoginWrapper>
  );
}
