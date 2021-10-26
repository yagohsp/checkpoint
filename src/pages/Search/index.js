import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";

import { ProfilePhoto } from "../../components";
import UiHook from "../../hooks/search/ui";
import UserHook from "../../hooks/search/user";
import GameHook from "../../hooks/search/game";
import {
  Container,
  Filters,
  Input,
  Label,
  Results,
  User,
  Nickname,
  UserData,
  FieldFilter,
  UserStats,
  GameStats,
} from "./styles";

export default function Search() {
  const {show, loading, ...rest} = UiHook();
  const {
    data: userData,
    changeSearch: setUserSearch
  } = UserHook(rest);
  const {
    data: gameData,
    changeSearch: setGameSearch
  } = GameHook(rest);

  console.warn(gameData);

  return (
    <Container>
      <Filters animate={true}>
        <FieldFilter>
          <Input
            placeholder=" "
            onChange={setUserSearch}
            disabled={loading}
          />
          <Label>Nome</Label>
        </FieldFilter>
        <FieldFilter>
          <Input
            placeholder=" "
            onChange={setGameSearch}
            disabled={loading}
          />
          <Label>Jogos</Label>
        </FieldFilter>
      </Filters>

      <Results showAllFilters={false}>
        {
          show === "users" ?
            <>
              {userData.map(
                (user, index) => 
                <User key={index} to={`perfil/${user.uid}`}>
                  <ProfilePhoto src={user?.Foto} />
                  <Nickname>{user?.Nome}</Nickname>
                  <UserData>
                    <UserStats>
                      <div>
                        <AiOutlineClockCircle />
                        <p>
                          <strong>{user?.gameHours}</strong> horas de jogo
                        </p>
                      </div>
                      <div>
                        <IoGameControllerOutline />
                        <p>
                          <strong>{user?.gameQuantity}</strong> jogos
                        </p>
                      </div>
                    </UserStats>
                    <GameStats>
                        <p>Jogo: <strong>{user?.game?.Jogo}</strong></p>
                        <p>Nível: <strong>{user?.game?.Nivel}</strong></p>
                        <p>Rank: <strong>{user?.game?.Rank}</strong></p>
                        <p>Horas de jogo: <strong>{user?.game?.TempoJogo}</strong></p>
                        <p>Modo de jogo: <strong>{user?.game?.ModoJogo}</strong></p>
                    </GameStats>
                  </UserData>
                </User>
              )}
            </>
          :
            <>
              {/* FAZER EXIBIÇÃO DOS GAMES AQUI */}
            </>
        }
      </Results>
    </Container>
  );
}
