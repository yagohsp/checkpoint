import React from "react";

import { Messages as MessagesHook } from "../../../../../hooks/user/chat/chat";
import {
  Messages
} from "./styles";

export default function Chat() {
  const {data} = MessagesHook();

  return (
    <Messages>

    </Messages>
  );
}
