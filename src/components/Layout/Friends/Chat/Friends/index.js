import React from "react";

import {
  FriendButton,
} from "./styles";
import FriendsHook from "../../../../../hooks/user/chat/friends";

export default function Friends(props) {
  const {data, focused, handleClick} = FriendsHook(props);

  return (
    <FriendButton focused={focused} onClick={handleClick}>
      <img src={data?.Foto} alt="a" />
      <span>{data?.Nome}</span>
    </FriendButton>
  );
}
