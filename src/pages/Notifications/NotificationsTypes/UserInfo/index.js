import React from "react";

import { ProfilePhoto } from "../../../../components";
import {
  Profile,
} from "../../styles";

export default function UserInfo(props) {
  const {data, text} = props;
  
  return (
    <Profile>
        <ProfilePhoto src={data.Foto} />
        <p><strong>{data.Nome}</strong> {text}</p>
    </Profile>
  );
}
