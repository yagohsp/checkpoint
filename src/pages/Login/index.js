import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

import { Content, LoginWrapper, Title } from "./styles";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <LoginWrapper>
      <Content>
        <Title>Login</Title>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <TextInput
          label="Senha"
          placeholder="*********"
          {...register("senha")}
        />

        <Button>Entrar</Button>

      </Content>
    </LoginWrapper>
  );
}
