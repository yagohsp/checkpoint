import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { TextInput } from "../../components/form";
import { createUser } from "../../services/user/authentication";

import { LoginForm, LoginWrapper, Title } from "./styles";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }: { email: string, password: string }) => {
    createUser(email, password);
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <TextInput
          label="Senha"
          placeholder="*********"
          type="password"
          {...register("password")}
        />

        <Button>Entrar</Button>
      </LoginForm>
    </LoginWrapper>
  );
}
