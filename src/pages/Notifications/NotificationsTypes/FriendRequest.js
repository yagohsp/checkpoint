import React from "react";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";

import FriendRequestHook from "../../../hooks/notifications/friend-request";
import UserInfo from "./UserInfo";
import {
  Notification,
  AcceptButton,
  RejectButton,
  ButtonsWrapper,
  Status
} from "../styles";

export default function FriendRequest(props) {
  const {data, notification, ...rest} = props;
  const {acceptRequest, rejectRequest} = FriendRequestHook({uid: data.uid, ...rest});

  return (
    <Notification>
        <UserInfo text="quer te adicionar como amigo" data={data} />
        <ButtonsWrapper>
          {
            notification.Status ?
              notification.Status === "accept" ?
                <Status status={true}><BsFillPatchPlusFill /> Aceito</Status>
              :
                <Status status={false}><BsFillPatchMinusFill /> Rejeitado</Status>
            :
              <>
                <AcceptButton onClick={acceptRequest}>Aceitar</AcceptButton>
                <RejectButton onClick={rejectRequest}>Recusar</RejectButton>
              </>
          }
        </ButtonsWrapper>
    </Notification>
  );
}
