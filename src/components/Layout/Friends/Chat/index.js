import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

import {
  ChatWrapper,
  FriendsScroll,
  Friend,
  CloseFriend,
  Messages,
  InputMessageWrapper,
  InputMessage,
  SendMessageButton,
} from "./styles";

export default function Chat() {
  return (
    <ChatWrapper>
      <FriendsScroll>
        <Friend>
          <img
            src="https://cdn.discordapp.com/avatars/296857261849182209/575419d3a7081656b2636ee34f85cd9f.png?size=128"
            alt="a"
          />
          <span>Ewndr</span>
          <CloseFriend>
            <AiOutlineClose />
          </CloseFriend>
        </Friend>
        <Friend>
          <img
            src="https://64.media.tumblr.com/fdd8b2018c5b46df206712b1f59a9077/20cf06aa31c5db0f-91/s250x400/bc669c2fa0ce09c7278ce2994e3ca73406ed7ef8.png"
            alt="a"
          />
          <span>Belizard</span>
          <CloseFriend>
            <AiOutlineClose />
          </CloseFriend>
        </Friend>
        <Friend>
          <img
            src="https://cdn.discordapp.com/avatars/239206719056510977/46226074baee6e259a23652ee2884179.png?size=128"
            alt="a"
          />
          <span>Yshen</span>
          <CloseFriend>
            <AiOutlineClose />
          </CloseFriend>
        </Friend>
      </FriendsScroll>

      <Messages></Messages>

      <InputMessageWrapper>
        <InputMessage placeholder="Envie uma mensagem..." />
        <SendMessageButton>
          <IoMdSend />
        </SendMessageButton>
      </InputMessageWrapper>
    </ChatWrapper>
  );
}
