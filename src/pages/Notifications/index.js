import React from "react";
import { ProfilePhoto } from "../../components";
import {
  Notification,
  Container,
  AcceptButton,
  RejectButton,
  ButtonsWrapper,
  Profile,
} from "./styles";

export default function Notifications() {
  return (
    <Container>
      <Notification to="/">
        <Profile>
          <ProfilePhoto />
          <p>
            <strong>Yago</strong> quer te adicionar como amigo
          </p>
        </Profile>
        <ButtonsWrapper>
          <AcceptButton>Aceitar</AcceptButton>
          <RejectButton>Recusar</RejectButton>
        </ButtonsWrapper>
      </Notification>

      <Notification to="/">
        <Profile>
          <ProfilePhoto />
          <p>
            <strong>Yago</strong> curtiu sua publicação
          </p>
        </Profile>
      </Notification>

      <Notification to="/">
        <Profile>
          <ProfilePhoto />
          <p>
            <strong>Yago</strong> comentou na sua publicação
          </p>
        </Profile>
      </Notification>
    </Container>
  );
}
