import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IoSend } from "react-icons/io5";

import postValidation from "./postValidation";
import { ProfilePhoto } from "../../../components";
import File from "../../../hooks/feed/create/file";
import CreatePost from "../../../hooks/feed/create/post";
import Attachment from "./attachment";
import {
  BarWrapper,
  PostForm,
  InputWrapper,
  InputDiv,
  PostFormError,
  PostButton,
  PostInput,
  DownsideDiv,
} from "./styles";

export default function CreatePostBar(props) {
  const {
    file,
    cleanFile,
    ...rest
  } = File();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(postValidation),
  });

  const { 
    onSubmit
  } = CreatePost({
    reset,
    file,
    cleanFile,
    refresh: props?.refresh
  });

  return (
    <BarWrapper>
      <PostForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputWrapper>
          <ProfilePhoto />
          <InputDiv>
            <PostInput 
              placeholder="Como estão seus jogos ultimamente?"
              error={errors.description?.message}
              {...register("description")}
            />
            <PostFormError>
              {errors.description?.message}
            </PostFormError>
          </InputDiv>
        </InputWrapper>
        <PostButton type="submit">
          <IoSend />
        </PostButton>
        <DownsideDiv>
          <Attachment file={file} cleanFile={cleanFile} {...rest} />
        </DownsideDiv>
      </PostForm>
    </BarWrapper>
  );
}
