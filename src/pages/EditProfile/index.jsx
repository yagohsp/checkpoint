import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

import FileHook from "../../hooks/file";
import profileValidation from "./profile-validation";
import MyProfileHook, { SaveProfile } from "../../hooks/user/my-profile";
import Picture from "./Picture";
import Banner from "./Banner";
import Game from "./Game";
import {
  ContainerForm,
  SpaceBetweenDiv,
  Title,
  BasicStats,
  InputWrapper,
  Label,
  FlexColumn,
  Input,
  TextArea,
  SubTitle,
  SaveButton,
} from "./styles";

export default function EditProfile() {
  const {
    data, 
    addGame, 
    removeGame, 
    changeGameFieldValue,
    addFile,
    removeFile
  } = MyProfileHook();
  const {
    file: profilePhoto,
    ...profilePhotoRest
  } = FileHook({
    base64: true,
    defaultFile: data?.Foto
  });
  const {
    file: banner,
    ...bannerRest
  } = FileHook({
    base64: true,
    defaultFile: data?.Poster
  });

  const {onSubmit} = SaveProfile({
    profilePhoto,
    banner,
    games: data?.Jogos
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileValidation),
  });

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <SpaceBetweenDiv>
        <Title>Editar Perfil</Title>
        <button type="submit"><AiOutlineSave /></button>
      </SpaceBetweenDiv>
      <BasicStats>
        <FlexColumn>
          <Picture file={profilePhoto} {...profilePhotoRest} />
          <InputWrapper>
            <Label>E-mail</Label>
            <Input 
              {...register("email")}
              defaultValue={data?.email} 
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Usuário</Label>
            <Input 
              {...register("username")}
              defaultValue={data?.Nome} 
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Senha</Label>
            <Input {...register("password")} type="password" />
          </InputWrapper>
          <InputWrapper>
            <Label>Confirmar senha</Label>
            <Input {...register("repeatPassword")} type="password" />
          </InputWrapper>
        </FlexColumn>
        <Banner file={banner} {...bannerRest} />
      </BasicStats>
      <InputWrapper>
        <Label>Descrição</Label>
        <TextArea 
          rows={3}
          {...register("description")}
          defaultValue={data?.Descricao}
        />
      </InputWrapper>

      <SpaceBetweenDiv styles={`{margin-top: 4rem; margin-bottom: 2rem;}`}>
        <SubTitle>Jogos</SubTitle>
        <button type="button" onClick={addGame}><IoIosAddCircleOutline /></button>
      </SpaceBetweenDiv>
      {
        data?.Jogos?.map((game, index) => 
          <Game 
            key={index} 
            data={{index, ...game}} 
            removeGame={() => removeGame(index)}
            changeGameFieldValue={(fieldProps) => changeGameFieldValue({...fieldProps, index})}
            addFile={(file) => addFile({index, file})}
            removeFile={(fileIndex) => removeFile({index, fileIndex})}
          />
        )
      }
      <SaveButton>Salvar</SaveButton>
    </ContainerForm>
  );
}
