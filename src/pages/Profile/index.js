import React, { useRef, useState } from "react";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline, MdPeopleOutline } from "react-icons/md";

import { ProfilePhoto } from "../../components";
import Posts from "../../components/Posts";
import {
  BackgroundBanner,
  Container,
  Description,
  EditProfileLink,
  ImageAndName,
  ShowBackgroundButton,
  Stats,
  User,
} from "./styles";

export default function Profile() {
  const containerRef = useRef(null);

  const [showBackground, setShowBackground] = useState(false);

  return (
    <Container ref={containerRef}>
      <BackgroundBanner
        style={{
          width: containerRef.current ? containerRef.current.clientWidth : 0,
          opacity: showBackground ? 0.9 : 0.15,
          zIndex: showBackground ? 1 : 0,
        }}
      >
        <img
          src="https://i.pinimg.com/originals/1b/67/e3/1b67e338c39430d2820c5bb19e137e38.jpg"
          alt="banner"
        />
      </BackgroundBanner>
      <User>
        <ImageAndName>
          <ProfilePhoto />\<h1>Yago</h1>
        </ImageAndName>
        <Description>
          Um Yago por aí que é developer, gosta de jogar e também desenha as
          vezes
        </Description>
        <Stats>
          <ShowBackgroundButton
            onMouseEnter={() => setShowBackground(true)}
            onMouseLeave={() => setShowBackground(false)}
            onClick={() => setShowBackground((state) => true)}
            onBlur={() => setShowBackground((state) => false)}
          >
            <AiOutlineEye />
          </ShowBackgroundButton>
          <EditProfileLink
            to="/editar-perfil"
          >
            <MdOutlineModeEditOutline />
          </EditProfileLink>
          <div>
            <AiOutlineClockCircle />
            <p>
              <strong>2051</strong> horas de jogo
            </p>
          </div>
          <div>
            <IoGameControllerOutline />
            <p>
              <strong>23</strong> jogos
            </p>
          </div>
          <div>
            <MdPeopleOutline />
            <p>
              <strong>183</strong> amigos
            </p>
          </div>
        </Stats>
      </User>
      {/* <Posts /> */}
    </Container>
  );
}
