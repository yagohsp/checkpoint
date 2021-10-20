import React from "react";

import MessagesHook from "../../../../../hooks/user/chat/messages";
import Loading from "../../../../Loading/Oval";
import {
  MessagesWrapper,
  MessageList,
  Message
} from "./styles";

export default function Chat() {
  const {data, loading, uid} = MessagesHook();

  return (
    <MessagesWrapper>
      {
        loading ?
          <Loading />
        :
          <MessageList>
            {
              data.map((message, index) => 
                <Message key={index} user={message?.userid === uid}>
                  <div>
                    {message?.message}
                  </div>
                </Message>
              )
            }
          </MessageList>
      }
    </MessagesWrapper>
  );
}
