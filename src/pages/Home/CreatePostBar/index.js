import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IoSend } from "react-icons/io5";

import { AuthContext } from "../../../providers/Auth";
import postValidation from "./postValidation";
import { ProfilePhoto } from "../../../components";
import File from "../../../hooks/feed/create/file";
import Attachment from "./attachment";
import { createPost } from "../../../services/feed/posts";
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
  const {currentUser} = useContext(AuthContext);
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

  const cleanForm = () => {
    reset();
    cleanFile();
  };

  const onSubmit = async (data) => {
    await createPost({...data, file, uid: currentUser.uid});
    cleanForm();
    props?.refresh();
  };

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
