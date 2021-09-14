import React from "react";

import {
  Buttons,
  Description,
  Post,
  Poster,
  PostsWrapper,
  Profile,
} from "./styles";

import { BiLike, BiShareAlt, BiCommentDetail } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

export default function Posts() {
  return (
    <PostsWrapper>
      {Array.from({ length: 10 }, (props, key) => (
        <Post key={key}>
          <Poster>
            <img src="https://i.pinimg.com/originals/1b/67/e3/1b67e338c39430d2820c5bb19e137e38.jpg" alt="Poster" />
          </Poster>
          <div>
            <Profile>
              <img
                src="https://cdn.discordapp.com/avatars/239206719056510977/46226074baee6e259a23652ee2884179.png?size=128"
                alt="Foto de perfil"
              />
              Yshen
            </Profile>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate odio at purus vulputate, vel cursus magna vehicula. Ut
              posuere a erat eget lobortis. Mauris id dui porta, facilisis sem
              nec, sagittis eros. Ut eros elit, commodo et justo at, suscipit
              auctor massa. Integer consectetur quis mauris et rutrum. Sed
              imperdiet tempus nulla, ac euismod dolor molestie gravida. Nunc
              mollis ex id dolor congue efficitur.
            </Description>
            <Buttons>
              <button>
                <BiLike />
              </button>
              <button>
                <BiShareAlt />
              </button>
              <button>
                <BiCommentDetail />
              </button>
              <button>
                <IoMdAdd />
              </button>
            </Buttons>
          </div>
        </Post>
      ))}
    </PostsWrapper>
  );
}