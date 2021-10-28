import { useState, useEffect, useCallback } from "react";

import { getUserWithStatistics } from "../services/user/friends";
import { getPostsByUserUid } from "../services/user/posts";

export default function Profile(props={}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const {uid} = props;

  const addFriend = useCallback(() => {}, []);

  const loadProfileData = useCallback(async () => {
    setLoading(true);
    var data = {
      uid: uid,
      user: await getUserWithStatistics(uid),
      posts: await getPostsByUserUid(uid)
    };
    setData(data);
    setLoading(false);
  }, [uid]);

  useEffect(() => {
    if(uid) loadProfileData();
  }, [uid, loadProfileData]);

  return {data, loading, addFriend};
};