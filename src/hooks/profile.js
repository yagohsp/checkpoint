import { useState, useEffect, useCallback, useContext } from "react";

import { AuthContext } from "../providers/Auth";
import ConditionalAddUidsModel from "../models/profile/conditional-add-uids";
import { getUserWithStatistics } from "../services/user/friends";
import { getPostsByUserUid } from "../services/user/posts";
import { addFriendRequest } from "../services/user/friends";

export default function Profile(props={}) {
  const {uid} = props;
  const {currentUserData} = useContext(AuthContext);
  const [conditionalAddUids, setConditionalAddUids] = useState(ConditionalAddUidsModel());
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const addFriend = useCallback(async () => {
    setLoading(true);
    await addFriendRequest({
        from: currentUserData.uid, 
        to: uid
    });
    setLoading(false);
  }, [currentUserData, uid]);

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
    if(!currentUserData) return ;
    var exclude = ConditionalAddUidsModel();
    exclude.hide = [
        ...currentUserData.AmigosUid, 
        currentUserData.uid,
        ...currentUserData.Pedidos?.Enviados,
        ...currentUserData.Pedidos?.Recebidos
    ];
    setConditionalAddUids(exclude);
    if(uid) loadProfileData();
  }, [uid, loadProfileData, currentUserData]);

  return {data, loading, addFriend, conditionalAddUids};
};