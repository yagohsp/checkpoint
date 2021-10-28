import React from "react";

import NotificationsListHook from "../../hooks/notifications/list";
import Notification from "./NotificationsTypes/";
import {
  Container
} from "./styles";

export default function Notifications() {
  const {data} = NotificationsListHook();
  return (
    <Container>
      {data.map((notification, index) => <Notification key={index} id={index} data={notification} />)}
    </Container>
  );
}
