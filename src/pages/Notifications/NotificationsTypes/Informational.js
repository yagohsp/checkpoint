import React from "react";

import UserInfo from "./UserInfo";
import {
  NotificationLink,
} from "../styles";

export default function Informational(props) {
  const {
    userAttached = true
  } = props;

  return (
    <NotificationLink to="/">
      {userAttached && <UserInfo {...props} />}
    </NotificationLink>
  );
}
