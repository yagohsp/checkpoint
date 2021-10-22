import React, { useEffect, useState, useCallback, useRef } from "react";
import firebase from "../firebase";

import { createTrigger as createTriggerUser } from "../services";
import { getUser } from "../services/user/friends";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const unsubscribe = useRef(null);
  const initialized = useRef(false);

  const setupUserData = useCallback(async (uid, user) => {
    var data = await getUser(uid);
    data['AmigosUid'] = [];
    const friendPromises = data?.Amigos.map((friend) => data.AmigosUid.push(friend?.id));
    await Promise.all(friendPromises);
    setCurrentUserData({
      ...data, 
      Email: currentUser?.email ? currentUser.email : user.email, 
      uid
    });
  }, [currentUser]);

  const createTrigger = useCallback(async (user) => {
    if(!await getUser(user.uid)) return ;
    await setupUserData(user.uid, user);
    const trigger = await createTriggerUser(`usuários/${user.uid}`);
    unsubscribe.current = trigger.onSnapshot({
      next: async (snapshot) => {
        await setupUserData(snapshot.id, user);
      }
    });
  }, [setupUserData]);

  useEffect(() => {
    if(initialized.current) return ;
    initialized.current = true;
    firebase.auth().onAuthStateChanged(async (user) => {
      setLoading(true);
      if(unsubscribe.current) unsubscribe.current();
      if(user){
        await createTrigger(user);
        setCurrentUser(user);
      } else {
        setCurrentUserData(null);
        setCurrentUser(null);
      }
      setLoading(false);
    });
  }, [createTrigger, loading]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUserData
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
