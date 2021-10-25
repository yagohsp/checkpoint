import React from "react";
import { useParams } from "react-router-dom";

import Profile from "../../components/Profile";
import ProfileHook from "../../hooks/profile";

export default function MyProfile() {
  const { uid } = useParams();
  const {data, loading} = ProfileHook({uid});

  return (
    <Profile data={data} allowEdit={false} />
  );
}
