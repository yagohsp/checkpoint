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
  CustomButton,
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

  const {loading, onSubmit} = SaveProfile({
    Foto: profilePhoto,
    Poster: banner,
    Jogos: data?.Jogos
  });

  const {
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(profileValidation),
  });

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <SpaceBetweenDiv>
        <Title>Editar Perfil</Title>
      </SpaceBetweenDiv>
      <BasicStats>
        <FlexColumn>
          <Picture file={profilePhoto} {...profilePhotoRest} />
          <InputWrapper>
            <Label>E-mail</Label>
            <Input 
              {...register("Email")}
              defaultValue={data?.Email} 
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Usuário</Label>
            <Input 
              {...register("Nome")}
              defaultValue={data?.Nome} 
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Senha</Label>
            <Input {...register("Password")} type="password" />
          </InputWrapper>
          <InputWrapper>
            <Label>Confirmar senha</Label>
            <Input {...register("RepeatPassword")} type="password" />
          </InputWrapper>
        </FlexColumn>
        <Banner file={banner} {...bannerRest} />
      </BasicStats>
      <InputWrapper>
        <Label>Descrição</Label>
        <TextArea 
          rows={3}
          {...register("Descricao")}
          defaultValue={data?.Descricao}
        />
      </InputWrapper>

      <SpaceBetweenDiv styles={`{margin-top: 4rem; margin-bottom: 2rem;}`}>
        <SubTitle>Jogos</SubTitle>
        <CustomButton type="button" onClick={addGame}><IoIosAddCircleOutline /></CustomButton>
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
      <CustomButton type="submit">Salvar</CustomButton>
    </ContainerForm>
  );
}
