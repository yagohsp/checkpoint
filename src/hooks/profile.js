import { useState, useEffect, useCallback } from "react";

import { getUser } from "../services/user/friends";
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
      user: await getUser(uid),
      posts: await getPostsByUserUid(uid),
      statistics: {
        gameHours: 0,
        friendsQuantity: 0,
        gamesQuantity: 0
      }
    };
    data.user?.Jogos.forEach((game) => data.statistics.gameHours = data.statistics.gameHours + parseInt(game?.TempoJogo));
    data.statistics.friendsQuantity = data.user ? data.user.Amigos.length : 0;
    data.statistics.gamesQuantity = data.user ? data.user.Jogos.length : 0;
    setData(data);
    setLoading(false);
  }, [uid]);

  useEffect(() => {
    if(uid) loadProfileData();
  }, [uid, loadProfileData]);

  return {data, loading, addFriend};
};