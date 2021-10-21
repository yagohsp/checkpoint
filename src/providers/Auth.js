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

  const setupUserData = useCallback(async (uid, user) => {
    const data = await getUser(uid);
    setCurrentUserData({...data, Email: currentUser?.email ? currentUser.email : user.email});
  }, [currentUser]);

  const createTrigger = useCallback(async (user) => {
    await setupUserData(user.uid, user);
    const trigger = await createTriggerUser(`usuários/${user.uid}`);
    unsubscribe.current = trigger.onSnapshot({
      next: async (snapshot) => {
        await setupUserData(snapshot.id, user);
      }
    });
  }, [setupUserData]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(!user) return ;
      if(unsubscribe.current) unsubscribe.current();
      await createTrigger(user);
      setCurrentUser(user);
      setLoading(false);
    });
  }, [createTrigger]);

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
