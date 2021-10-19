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
  Input,
  DownsideDiv,
} from "./styles";

export default function PostInput(props) {
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
      <ProfilePhoto />
      <PostForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputWrapper>
          <InputDiv>
            <Input 
              placeholder="Como estão seus jogos ultimamente?"
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
