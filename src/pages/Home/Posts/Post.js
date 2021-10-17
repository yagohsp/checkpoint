import React from "react";
import { BiLike, BiShareAlt, BiCommentDetail } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import {
  Buttons,
  Description,
  Poster,
  Profile,
} from "./styles";
import PostUserDataHook from "../../../hooks/feed/list/postUserData";

export default function PostElement(props) {
  const {post} = props;
  const {data} = PostUserDataHook(props);

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
          <button>
            <BiLike />
          </button>
          <button>
            <BiShareAlt />
          </button>
          <button>
            <BiCommentDetail />
          </button>
          <button>
            <IoMdAdd />
          </button>
        </Buttons>
      </div>
    </>
  );
}