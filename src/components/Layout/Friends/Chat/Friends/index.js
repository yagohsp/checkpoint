import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

import {
  FriendButton,
  CloseFriend
} from "./styles";
import FriendsHook from "../../../../../hooks/user/chat/friends";

export default function Friends(props) {
  const {data, focused, handleClick: changeChat, handleCloseClick: removeChat} = FriendsHook(props);

  return (
    <FriendButton focused={focused}>
      <div onClick={changeChat}>
        <img src={data?.Foto} alt="a" />
        <span>{data?.Nome}</span>
      </div>
      <CloseFriend onClick={removeChat}>
        <AiOutlineCloseSquare />
      </CloseFriend>
    </FriendButton>
  );
}
