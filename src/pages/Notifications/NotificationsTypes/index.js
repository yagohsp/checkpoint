import React from "react";

import NotificationDataHook from "../../../hooks/notifications/data";
import FriendRequest from "./FriendRequest";
import Informational from "./Informational";

export default function NotificationComponent(props) {
    const {data, id} = props;
    const {loading, ...rest} = NotificationDataHook({uid: data.EnviadoPorUid});

    switch(data.Tipo){
        case "friend_request":
            return <FriendRequest {...rest} notification={data} id={id} />;
        case "like":
            return <Informational text="curtiu sua publicação" {...rest} id={id} />;
        case "comment":
            return <Informational text="comentou na sua publicação" {...rest} id={id} />;
        default:
            return <Informational text={data.Mensagem} userAttached={false} {...rest} />;
    }
}
