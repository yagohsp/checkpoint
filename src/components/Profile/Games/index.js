import React from "react";
import {
  GameContent,
  GameTitle,
  GameStats,
  Screenshot,
  Screenshots,
} from "./styles";

export default function Games(props) {
  const { data } = props;

  return (
    data.map((jogo, index) => {
      return (
        <GameContent key={index}>
          <GameTitle>
            <h2>{jogo?.Jogo}</h2>
          </GameTitle>
          <GameStats>
            <div>
              <label>Nível</label>
              <p>{jogo?.Nivel}</p>
            </div>
            <div>
              <label>Rank</label>
              <p>{jogo?.Rank}</p>
            </div>
            <div>
              <label>Modo de jogo</label>
              <p>{jogo?.ModoJogo}</p>
            </div>
            <div>
              <label>Tempo de jogo</label>
              <p>{jogo?.TempoJogo}</p>
            </div>
            <div>
              <label>Joga desde</label>
              <p>{jogo?.JogaDesde}</p>
            </div>
          </GameStats>
          <Screenshots>
            <label>Screenshots</label>
            {
              jogo?.Capturas?.map((captura, index) => <img key={index} src={captura} alt="" />)
            }
            <Screenshot></Screenshot>
          </Screenshots>
        </GameContent>
      );
    })
  );
}
