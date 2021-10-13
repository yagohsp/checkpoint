import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput, Button } from "../../components";
import { CreateAccount, LoginForm, LoginWrapper, Title } from "./styles";
import loginValidation from "./loginValidation";
import { login } from "../../services/user/authentication";
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
      history.go(0);
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

        <CreateAccount to="/signup">Criar conta</CreateAccount>
      </LoginForm>
    </LoginWrapper>
  );
}
