import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FileDropzone, TextInput, Button } from "../../components";
import { ProfileForm, ProfileWrapper, Title } from "./styles";
import profileValidation from "./profile-validation";
import { createProfile } from "../../services/user/profile";
import { fileToBase64 } from "../../util/files";
import { AuthContext } from "../../providers/Auth";

export default function Login() {
  const {currentUserData} = useContext(AuthContext);
  const [requestError, setRequestError] = useState({});
  const [photo, setPhoto] = useState(null);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentUserData) {
      history.push("/");
    }
  }, [currentUserData, history]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileValidation),
  });

  const onSubmit = async ({ nome }) => {
    setIsLoading(true);
    const photoBase64 = await fileToBase64(photo);
    const response = await createProfile(nome, photoBase64);
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
    <ProfileWrapper>
      <ProfileForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Title>Configure seu perfil</Title>

        <TextInput
          label="Foto (Opcional)"
          customInput={() => {
            return <FileDropzone 
              currentFiles={photo}
              setCurrentFiles={setPhoto}
              maxFiles={1}
              maxSize={2000000}
              accept={'image/jpeg, image/png'}
              style={{ marginBottom: '2em' }}
              dropzoneStyle={{ minHeight: '8em' }}
              showList
            />
          }}
        />

        <TextInput
          label="Nome (Obrigatório)"
          placeholder="Digite seu nome"
          error={
            errors.nome?.message ||
            (requestError.type === "nome" && requestError.message)
          }
          {...register("nome")}
        />

        <Button
          isLoading={isLoading}
          error={requestError.type === "default" && requestError.message}
        >
          Salvar
        </Button>
      </ProfileForm>
    </ProfileWrapper>
  );
}
