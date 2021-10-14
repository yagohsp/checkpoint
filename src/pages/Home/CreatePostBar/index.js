import React from "react";

import { IoSend } from "react-icons/io5";
import { AiOutlineGif, AiOutlineVideoCamera } from "react-icons/ai";
import { ImImage  } from "react-icons/im";

import { ProfilePhoto } from "../../../components";
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
        <ProfilePhoto />
        <PostInput placeholder="Como estão seus jogos ultimamente?" />
      </InputWrapper>
      <PostButton>
        <IoSend />
      </PostButton>
      <AttachmentButton>
        <AiOutlineGif size={23}/>
        <ImImage size={20}/>
        <AiOutlineVideoCamera size={25}/>
      </AttachmentButton>
    </BarWrapper>
  );
}
