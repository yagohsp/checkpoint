import React from "react";
import {
  GameContent,
  GameTitle,
  GameStats,
  Screenshot,
  Screenshots,
} from "./styles";

export default function Games() {
  return (
    <>
      <GameContent>
        <GameTitle>
          <h2>Valorant</h2>
        </GameTitle>
        <GameStats>
          <div>
            <label>Nível</label>
            <p>204</p>
          </div>
          <div>
            <label>Rank</label>
            <p></p>
          </div>
          <div>
            <label>Modo de jogo</label>
            <p></p>
          </div>
          <div>
            <label>Tempo de jogo</label>
            <p></p>
          </div>
          <div>
            <label>Joga desde</label>
            <p></p>
          </div>
        </GameStats>
        <Screenshots>
          <label>Screenshots</label>
          <img
            src="https://www.freemmostation.com/wp-content/uploads/2020/04/Valorant-screenshot-11.jpg"
            alt=""
          />
          <img
            src="https://preview.redd.it/b2ei9sz75zs61.png?width=1920&format=png&auto=webp&s=08dbc2d1859f80d63460426bee76d85c3dc2116d"
            alt=""
          />
          <Screenshot></Screenshot>
        </Screenshots>
      </GameContent>
      <GameContent>
        <GameTitle>
          <h2>Valorant</h2>
        </GameTitle>
        <GameStats>
          <div>
            <label>Nível</label>
            <p>204</p>
          </div>
          <div>
            <label>Rank</label>
            <p></p>
          </div>
          <div>
            <label>Modo de jogo</label>
            <p></p>
          </div>
          <div>
            <label>Tempo de jogo</label>
            <p></p>
          </div>
          <div>
            <label>Joga desde</label>
            <p></p>
          </div>
        </GameStats>
        <Screenshots>
          <label>Screenshots</label>
          <img
            src="https://www.freemmostation.com/wp-content/uploads/2020/04/Valorant-screenshot-11.jpg"
            alt=""
          />
          <img
            src="https://preview.redd.it/b2ei9sz75zs61.png?width=1920&format=png&auto=webp&s=08dbc2d1859f80d63460426bee76d85c3dc2116d"
            alt=""
          />
          <Screenshot></Screenshot>
        </Screenshots>
      </GameContent>
    </>
  );
}
