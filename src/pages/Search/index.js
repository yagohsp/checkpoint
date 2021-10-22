import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";

import {
  Container,
  Filters,
  Input,
  Label,
  Results,
  User,
  Nickname,
  UserData,
  NameFilter,
  GameFilters,
  GameInputWrapper,
  UserStats,
  GameStats,
} from "./styles";

import { ProfilePhoto } from "../../components";

export default function Search() {
  const [filters, setFilters] = useState({
    name: "",
    game: "",
    level: "",
    rank: "",
    playedHours: "",
    gamingMode: "",
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  useEffect(() => {
    if (filters.game === "") {
      setFilters((state) => ({
        ...state,
        level: "",
        rank: "",
        playedHours: "",
        gamingMode: "",
      }));
    }
  }, [filters.game]);

  return (
    <Container>
      <Filters animate={startAnimation}>
        <NameFilter>
          <Input
            placeholder=" "
            onChange={(e) =>
              setFilters((state) => ({ ...state, name: e.target.value }))
            }
          />
          <Label>Nome</Label>
        </NameFilter>

        <GameFilters showAllFilters={filters.game !== ""}>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) =>
                setFilters((state) => ({ ...state, game: e.target.value }))
              }
              value={filters.game}
            />
            <Label>Jogo</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) =>
                setFilters((state) => ({ ...state, level: e.target.value }))
              }
              value={filters.level}
            />
            <Label>Nível</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) =>
                setFilters((state) => ({ ...state, rank: e.target.value }))
              }
              value={filters.rank}
            />
            <Label>Rank</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) =>
                setFilters((state) => ({
                  ...state,
                  playedHours: e.target.value,
                }))
              }
              value={filters.playedHours}
            />
            <Label>Horas de jogo</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) =>
                setFilters((state) => ({
                  ...state,
                  gamingMode: e.target.value,
                }))
              }
              value={filters.gamingMode}
            />
            <Label>Modo de jogo</Label>
          </GameInputWrapper>
        </GameFilters>
      </Filters>

      <Results showAllFilters={filters.game !== ""}>
        <User to="">
          <ProfilePhoto />
          <Nickname>Yago</Nickname>
          <UserData>
            <UserStats>
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
            </UserStats>
            <GameStats>
                <p>Jogo: <strong>Dota 2</strong></p>
                <p>Nível: <strong>201</strong></p>
                <p>Rank: <strong>14</strong></p>
                <p>Horas de jogo: <strong>426</strong></p>
                <p>Modo de jogo: <strong>Competitivo</strong></p>
            </GameStats>
          </UserData>
        </User>
      </Results>
    </Container>
  );
}
