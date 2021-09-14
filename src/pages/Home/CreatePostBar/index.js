import React from "react";

import { IoSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import { AiOutlineGif, AiOutlineVideoCamera } from "react-icons/ai";
import { ImImage  } from "react-icons/im";

import {
  AttachmentButton,
  BarWrapper,
  InputWrapper,
  PostButton,
  PostInput,
} from "./styles";

export default function CreatePostBar() {
  return (
    <BarWrapper>
      <InputWrapper>
        <img
          src="https://cdn.discordapp.com/avatars/239206719056510977/46226074baee6e259a23652ee2884179.png?size=128"
          alt="Foto de perfil"
        />
        <PostInput placeholder="Como estão seus jogos ultimamente?" />
      </InputWrapper>
      <PostButton>
        <IoSend />
      </PostButton>
      <AttachmentButton>
        {/* <ImAttachment size={20}/> */}
        <AiOutlineGif size={23}/>
        <ImImage size={20}/>
        <AiOutlineVideoCamera size={25}/>
      </AttachmentButton>
    </BarWrapper>
  );
}
