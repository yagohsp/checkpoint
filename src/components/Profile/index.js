import React, { useState } from "react";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import {
  MdOutlineGames,
  MdOutlineModeEditOutline,
  MdPeopleOutline,
} from "react-icons/md";

import Ui from "../../hooks/my-profile/ui";
import { ProfilePhoto } from "../../components";
import Posts from "../Posts";
import Games from "./Games";

import {
  AddButton,
  BackgroundBanner,
  Container,
  Content,
  Description,
  EditProfileLink,
  ImageAndName,
  ShowBackgroundButton,
  Stats,
  TabButton,
  Tabs,
  User,
} from "./styles";

export default function Profile(props) {
  const { containerRef, showBackground, changeShowBackground, excludedUids } =
    Ui();
  const { data, allowEdit } = props;

  const [showTab, setShowTab] = useState("posts");

  return (
    <Container ref={containerRef}>
      <BackgroundBanner
        style={{
          width: containerRef.current ? containerRef.current.clientWidth : 0,
          opacity: showBackground ? 0.9 : 0.15,
          zIndex: showBackground ? 1 : 0,
        }}
      >
        <img src={data.user?.Poster} alt="banner" />
      </BackgroundBanner>
      <User>
        <ImageAndName>
          <ProfilePhoto src={data.user?.Foto} />
          <h1>{data.user?.Nome}</h1>
        </ImageAndName>
        <Description>{data.user?.Descricao}</Description>
        <Stats>
          <ShowBackgroundButton
            onMouseEnter={() => changeShowBackground(true)}
            onMouseLeave={() => changeShowBackground(false)}
            onClick={() => changeShowBackground((state) => true)}
            onBlur={() => changeShowBackground((state) => false)}
          >
            <AiOutlineEye />
          </ShowBackgroundButton>
          {allowEdit && (
            <EditProfileLink to="/editar-perfil">
              <MdOutlineModeEditOutline />
            </EditProfileLink>
          )}
          <div>
            <AiOutlineClockCircle />
            <p>
              <strong>{data.statistics?.gameHours}</strong> horas de jogo
            </p>
          </div>
          <div>
            <IoGameControllerOutline />
            <p>
              <strong>{data.statistics?.gamesQuantity}</strong> jogos
            </p>
          </div>
          <div>
            <MdPeopleOutline />
            <p>
              <strong>{data.statistics?.friendsQuantity}</strong> amigos
            </p>
          </div>
          {!excludedUids.includes(data?.uid) && (
            <AddButton>
              <MdOutlineGames /> Adicionar
            </AddButton>
          )}
        </Stats>
      </User>
      <Tabs>
        <TabButton
          active={showTab === "posts"}
          onClick={() => setShowTab("posts")}
        >
          Publicações
        </TabButton>
        <TabButton
          active={showTab === "games"}
          onClick={() => setShowTab("games")}
        >
          Jogos
        </TabButton>
      </Tabs>
      <Content showTab={showTab}>
        {showTab === "posts" && data.posts && <Posts data={data.posts} />}
        {showTab === "games" && data.posts && <Games />}
      </Content>
    </Container>
  );
}
