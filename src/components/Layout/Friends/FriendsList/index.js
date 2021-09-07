import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Friends, Dropdown, ScrollList, Friend } from "./styles";

export default function FriendsList() {
  return (
    <Friends>
      <Dropdown>
        Amigos
        <IoIosArrowUp />
      </Dropdown>
      <ScrollList>
        <li>
          <Friend>
            <img src="https://64.media.tumblr.com/fdd8b2018c5b46df206712b1f59a9077/20cf06aa31c5db0f-91/s250x400/bc669c2fa0ce09c7278ce2994e3ca73406ed7ef8.png" alt="a" />
            <span>Belizard</span>
          </Friend>
        </li>
        <li>
          <Friend>
            <img src="https://64.media.tumblr.com/3e9d5297fc9ee5a3bf61925fcd78976a/7028705244647ef3-64/s250x400/7ab0ce7f69988c4d20fb5ea14a4c6c38b7b1a90d.png" alt="a" />
            <span>Nightlite</span>
          </Friend>
        </li>
        <li>
          <Friend>
            <img src="https://64.media.tumblr.com/36d77f61ef18bbe9ce64a1995b90e69f/1812e05d22fb3986-f6/s250x400/b4f394d6e3783632ba7d4022792ba76542a07cbb.png" alt="a" />
            <span>Everday</span>
          </Friend>
        </li>
        <li>
          <Friend>
            <img src="https://64.media.tumblr.com/c7273b7fb53c106195927850ca8c2bc6/ae2ce033301c2c4a-ba/s250x400/e22d02ebc3013612329863716e1fda4309759cea.png" alt="a" />
            <span>Willowisp</span>
          </Friend>
        </li>
        <li>
          <Friend>
            <img src="https://64.media.tumblr.com/6e07a77955759da4509acf2fb1414c08/a8dd71779b6be4f8-5c/s250x400/f43441b31fb56d46385a120e0f66c9ff9a5dad1e.png" alt="a" />
            <span>Yshen</span>
          </Friend>
        </li>
      </ScrollList>
    </Friends>
  );
}
