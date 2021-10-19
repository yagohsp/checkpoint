import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Friends, Dropdown, ScrollList, Friend } from "./styles";
import FriendsHook from "../../../../hooks/user/friends";
import { HideByHeight } from "../../../../animations/div";

export default function FriendsList() {
  const { data, hide, changeDisplay } = FriendsHook();

  return (
    <Friends>
      <Dropdown onClick={changeDisplay}>
        Amigos
        {
          hide ?
            <IoIosArrowUp />
          :
            <IoIosArrowDown />
        }
      </Dropdown>
      <HideByHeight hide={hide}>
        <ScrollList>
          {
            data.map((friend, index) => 
              <li key={index}>
                <Friend>
                  <img src={friend.Foto} alt={friend.Nome} />
                  <span>{friend.Nome}</span>
                </Friend>
              </li>
            )
          }
        </ScrollList>
      </HideByHeight>
    </Friends>
  );
}
