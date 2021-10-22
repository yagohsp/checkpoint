import React from "react";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import {
  MdOutlineGames,
  MdOutlineModeEditOutline,
  MdPeopleOutline,
} from "react-icons/md";

import { ProfilePhoto } from "../../components";
import Ui from "../../hooks/my-profile/ui";
import {
  AddButton,
  BackgroundBanner,
  Container,
  Description,
  EditProfileLink,
  ImageAndName,
  ShowBackgroundButton,
  Stats,
  User,
} from "./styles";

export default function Profile(props) {
    const {
        containerRef, 
        showBackground, 
        changeShowBackground, 
        excludedUids
    } = Ui();
    const {data, allowEdit} = props;

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
                    src={data.user?.Poster}
                    alt="banner"
                />
            </BackgroundBanner>
            <User>
                <ImageAndName>
                    <ProfilePhoto src={data.user?.Foto} /><h1>{data.user?.Nome}</h1>
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
                    {
                        allowEdit &&
                        <EditProfileLink to="/editar-perfil">
                            <MdOutlineModeEditOutline />
                        </EditProfileLink>
                    }
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
                    {
                        !excludedUids.includes(data?.uid) &&
                        <AddButton>
                            <MdOutlineGames /> Adicionar
                        </AddButton>
                    }
                </Stats>
            </User>
            {/* <Posts /> */}
        </Container>
    );
}
