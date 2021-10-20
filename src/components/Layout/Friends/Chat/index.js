import React from "react";
import { IoMdSend } from "react-icons/io";

import ChatHook from "../../../../hooks/user/chat/chat";
import Friends from "./Friends";
import Messages from "./Messages";
import {
  ChatWrapper,
  FriendsScroll,
  InputMessageWrapper,
  InputMessage,
  SendMessageButton,
} from "./styles";

export default function Chat() {
  const {currentChatting} = ChatHook();

  return (
    <ChatWrapper>
      <FriendsScroll>
        {currentChatting.map((frienduid, index) => <Friends key={index} uid={frienduid} />)}
      </FriendsScroll>
      <Messages />
      <InputMessageWrapper>
        <InputMessage placeholder="Envie uma mensagem..." />
        <SendMessageButton>
          <IoMdSend />
        </SendMessageButton>
      </InputMessageWrapper>
    </ChatWrapper>
  );
}
