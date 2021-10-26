import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";

import { ProfilePhoto } from "../../../components";
import {
  User,
  Nickname,
  UserData,
  UserStats,
  GameStats,
} from "../styles";

export default function UserComponent(props) {
  const {data} = props;

  return (
    <User to={`perfil/${data.uid}`}>
        <ProfilePhoto src={data?.Foto} />
        <Nickname>{data?.Nome}</Nickname>
        <UserData>
        <UserStats>
            <div>
            <AiOutlineClockCircle />
            <p>
                <strong>{data?.gameHours}</strong> horas de jogo
            </p>
            </div>
            <div>
            <IoGameControllerOutline />
            <p>
                <strong>{data?.gameQuantity}</strong> jogos
            </p>
            </div>
        </UserStats>
        <GameStats>
            <p>Jogo: <strong>{data?.game?.Jogo}</strong></p>
            <p>Nível: <strong>{data?.game?.Nivel}</strong></p>
            <p>Rank: <strong>{data?.game?.Rank}</strong></p>
            <p>Horas de jogo: <strong>{data?.game?.TempoJogo}</strong></p>
            <p>Modo de jogo: <strong>{data?.game?.ModoJogo}</strong></p>
        </GameStats>
        </UserData>
    </User>
  );
}
