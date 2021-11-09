import React, { useContext } from "react";

import { AuthContext } from "../../providers/Auth";
import Profile from "../../components/Profile";
import ProfileHook from "../../hooks/profile";

export default function MyProfile() {
  const {currentUser} = useContext(AuthContext);
  const {loading, ...rest} = ProfileHook({uid: currentUser?.uid});

  return (
    <Profile allowEdit={true} {...rest} />
  );
}
