import React from "react";
import { BiLike, BiCommentDetail } from 'react-icons/bi';
import { IoMdAdd, IoMdCheckmarkCircleOutline } from 'react-icons/io';

import {
  Buttons,
  LikeButton,
  LikeCount,
  Description,
  Poster,
  Profile,
} from "./styles";
import PostUserDataHook from "../../hooks/feed/list/postUserData";
import Like from "../../hooks/feed/actions/like";
import Save from "../../hooks/feed/actions/save";

export default function PostElement(props) {
  const {post, uid} = props;
  const {data} = PostUserDataHook(props);
  const {liked, likeCount, handleClick: likeClick} = Like({
    postUid: uid,
    Curtidas: post?.Curtidas
  });
  const {saved, handleClick: saveClick} = Save({ postUid: uid });

  return (
    <>
      <Poster>
        <img src={data?.Poster} alt="Poster" />
      </Poster>
      <div>
        <Profile>
          <img src={data?.Foto} alt="Foto de perfil" />
          {data?.Nome}
        </Profile>
        <Description>
          {post?.Conteudo}
        </Description>
        <Buttons>
          <LikeButton liked={liked} onClick={likeClick}>
            <BiLike />
            <LikeCount>{likeCount}</LikeCount>
          </LikeButton>
          <button>
            <BiCommentDetail />
          </button>
          <button onClick={saveClick}>
            {
              saved ?
                <IoMdCheckmarkCircleOutline />
              :
                <IoMdAdd />
            }
          </button>
        </Buttons>
      </div>
    </>
  );
}