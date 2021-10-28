import React from "react";

import UiHook from "../../hooks/search/ui";
import UserHook from "../../hooks/search/user";
import GameHook from "../../hooks/search/game";
import {
  Container,
  Filters,
  Input,
  Label,
  Results,
  NameFilter,
  GameFilters,
  GameInputWrapper
} from "./styles";
import User from "./User";

export default function Search() {
  const {show, loading, ...rest} = UiHook();
  const {
    data: userData,
    changeSearch: setUserSearch
  } = UserHook(rest);
  const {
    search: game,
    data: gameData,
    changeSearch: setGameSearch
  } = GameHook(rest);

  return (
    <Container>
      <Filters animate={true}>
        <NameFilter>
          <Input
            placeholder=" "
            onChange={setUserSearch}
          />
          <Label>Nome</Label>
        </NameFilter>

        <GameFilters showAllFilters={game.name !== ""}>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) => setGameSearch("name", e)}
            />
            <Label>Jogo</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) => setGameSearch("level", e)}
            />
            <Label>Nível</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) => setGameSearch("rank", e)}
            />
            <Label>Rank</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) => setGameSearch("playedHours", e)}
            />
            <Label>Horas de jogo</Label>
          </GameInputWrapper>
          <GameInputWrapper>
            <Input
              placeholder=" "
              onChange={(e) => setGameSearch("gamingMode", e)}
            />
            <Label>Modo de jogo</Label>
          </GameInputWrapper>
        </GameFilters>
      </Filters>

      <Results showAllFilters={game.name !== ""}>
        {
          show === "users" ?
            <>
              {userData.map((user, index) => <User key={index} data={user} />)}
            </>
          :
            <>
              {gameData.map((user, index) => <User key={index} data={user} />)}
            </>
        }
      </Results>
    </Container>
  );
}
