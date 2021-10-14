import React, { useContext } from "react";

import { AuthContext } from "../providers/Auth";

export default function ProfilePhoto() {
  const {currentUserData} = useContext(AuthContext);

  return (
    <img
      src={currentUserData?.Foto ? currentUserData.Foto : "https://pbs.twimg.com/media/Eyua9A-WEAIsVNR?format=jpg&name=medium"}
      alt="eu"
    />
  );
}
