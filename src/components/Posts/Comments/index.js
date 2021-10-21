import React from "react";
import { IoSend } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import commentValidation from "./commentValidation";
import Loading from "../../Loading/ThreeDots";
import CommentsHook from "../../../hooks/feed/actions/comment";
import {
  Animation,
  Comment,
  CommentInput,
  CommentsWrapper,
  InputWrapper,
  PostCommentButton,
  UserPhoto,
  CommentForm
} from "./styles";
  
export default function Comments(props) {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(commentValidation),
  });

  const {
    data,
    loading,
    onSubmit
  } = CommentsHook({
    reset,
    ...props
  });

  return (
    <Animation commentsLength={data.length === 0 ? 3 : data.length}>
      <CommentForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <CommentsWrapper>
          {
            loading ?
              <Loading />
            :
              <>
                {
                  data.map((comment, index) => 
                    <Comment key={index}>
                      <UserPhoto src={comment?.Usuario?.Foto} />
                      <div>
                        <h5>{comment?.Usuario?.Nome}</h5>
                        <p>{comment?.Comentario}</p>
                      </div>
                    </Comment>
                  )
                }
                <InputWrapper>
                  <CommentInput 
                    placeholder="O que você achou dessa publicação?"
                    {...register("comment")}
                  />
                  <PostCommentButton type="submit">
                    <IoSend />
                  </PostCommentButton>
                </InputWrapper>
              </>
          }
        </CommentsWrapper>
      </CommentForm>
    </Animation>
  );
}
