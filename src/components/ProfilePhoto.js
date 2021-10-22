import React, { useContext } from "react";

import { AuthContext } from "../providers/Auth";

export default function ProfilePhoto({ size, src }) {
  const { currentUserData } = useContext(AuthContext);
  const photoSrc = src ? 
    src 
  : 
    currentUserData?.Foto ? 
      currentUserData.Foto 
    : 
      "https://pbs.twimg.com/media/Eyua9A-WEAIsVNR?format=jpg&name=medium";

  return (
    <img
      src={photoSrc}
      alt="eu"
      style={{ height: size, width: size }}
    />
  );
}
