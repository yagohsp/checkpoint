import React from "react";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { IoMdAdd, IoMdCheckmarkCircleOutline } from "react-icons/io";

import {
  Buttons,
  LikeButton,
  LikeCount,
  Description,
  Poster,
  Profile,
  PostContent,
} from "./styles";
import PostUserDataHook from "../../../hooks/feed/list/post-user-data";
import Like from "../../../hooks/feed/actions/like";
import { ShowComments } from "../../../hooks/feed/actions/comment";
import Save from "../../../hooks/feed/actions/save";
import Comments from "../Comments";

export default function PostElement(props) {
  const { post, uid } = props;
  const { data } = PostUserDataHook(props);
  const {
    liked,
    likeCount,
    handleClick: likeClick,
  } = Like({ postUid: uid, Curtidas: post?.Curtidas });
  const { showComments, handleClick: commentClick } = ShowComments();
  const { saved, handleClick: saveClick } = Save({ postUid: uid });

  return (
    <div>
      <PostContent>
        <Poster>
          <img src={data?.Poster} alt="Poster" />
        </Poster>
        <div>
          <Profile>
            <img src={data?.Foto} alt="Foto de perfil" />
            {data?.Nome}
          </Profile>
          <Description>{post?.Conteudo}</Description>
          <Buttons>
            <LikeButton liked={liked} onClick={likeClick}>
              <BiLike />
              <LikeCount>{likeCount}</LikeCount>
            </LikeButton>
            <button onClick={commentClick}>
              <BiCommentDetail />
            </button>
            <button onClick={saveClick}>
              {saved ? <IoMdCheckmarkCircleOutline /> : <IoMdAdd />}
            </button>
          </Buttons>
        </div>
      </PostContent>

      {showComments && <Comments postUid={uid} />}
    </div>
  );
}
