import React from "react";
import { IoMdSend } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import messageValidation from "./messageValidation";
import ChatHook from "../../../../hooks/user/chat/chat";
import Friends from "./Friends";
import Messages from "./Messages";
import {
  ChatWrapper,
  FriendsScroll,
  InputMessageForm,
  InputMessage,
  SendMessageButton,
} from "./styles";

export default function Chat() {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(messageValidation),
  });

  const {
    currentChatting, 
    onSubmit
  } = ChatHook({reset});

  return (
    <ChatWrapper>
      <FriendsScroll>
        {currentChatting.map((frienduid, index) => <Friends key={index} uid={frienduid} />)}
      </FriendsScroll>
      <Messages />
      <InputMessageForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <InputMessage 
          placeholder="Envie uma mensagem..." 
          {...register("message")}
        />
        <SendMessageButton type="submit">
          <IoMdSend />
        </SendMessageButton>
      </InputMessageForm>
    </ChatWrapper>
  );
}
