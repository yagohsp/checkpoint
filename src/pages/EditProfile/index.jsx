import React from "react";
import { ProfilePhoto } from "../../components";
import {
  Container,
  Title,
  BasicStats,
  InputWrapper,
  Label,
  PictureInput,
  BannerInput,
  FlexColumn,
  Input,
  TextArea,
  SubTitle,
  GameContent,
  GameStats,
  Screenshots,
} from "./styles";

export default function EditProfile() {
  return (
    <Container>
      <Title>Editar Perfil</Title>
      <BasicStats>
        <FlexColumn>
          <PictureInput>
            <label>Imagem de perfil</label>
            <ProfilePhoto size="17rem" />
          </PictureInput>
          <InputWrapper>
            <Label>E-mail</Label>
            <Input />
          </InputWrapper>
          <InputWrapper>
            <Label>Usuário</Label>
            <Input />
          </InputWrapper>
          <InputWrapper>
            <Label>Senha</Label>
            <Input />
          </InputWrapper>
          <InputWrapper>
            <Label>Confirmar senha</Label>
            <Input />
          </InputWrapper>
        </FlexColumn>
        <BannerInput>
          <label>Banner</label>
          <img
            src="https://i.pinimg.com/originals/1b/67/e3/1b67e338c39430d2820c5bb19e137e38.jpg"
            alt="banner"
          />
        </BannerInput>
      </BasicStats>
      <InputWrapper>
        <Label>Descrição</Label>
        <TextArea rows={3} />
      </InputWrapper>

      <SubTitle>Jogos</SubTitle>
      <GameContent>
        <h3>Dota 2</h3>
        <GameStats>
          <div>
            <label>Nível</label>
            <p>204</p>
          </div>
          <div>
            <label>Rank</label>
            <p>4023</p>
          </div>
          <div>
            <label>Modo de jogo</label>
            <p>Competitivo</p>
          </div>
          <div>
            <label>Tempo de jogo</label>
            <p>1402 horas</p>
          </div>
          <div>
            <label>Joga desde</label>
            <p>2015</p>
          </div>
        </GameStats>
        <Screenshots>
          <label>Screenshots</label>
          <img src="https://www.gamingcfg.com/img/9706/Dota-2.jpg" alt="1" />
          <img src="https://www.gamingcfg.com/img/9708/Bot-lane.jpg" alt="2" />
          <img src="https://i.imgur.com/WP32vA5.jpg" alt="3" />
          <img src="https://media.rawg.io/media/screenshots/55e/55e2c2ff16229eef87cfd8728ca537ac.jpg" alt="4" />
          <img src="https://www.mobygames.com/images/promo/original/1471162549-3475988976.jpg" alt="5" />
        </Screenshots>
      </GameContent>
    </Container>
  );
}
