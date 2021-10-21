import React, { useEffect, useState, useCallback } from "react";
import firebase, { db } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sync = useCallback(async (user) => {
    if(!user && !currentUser) return;
    const data = await db.collection("usuários").doc(user ? user.uid : currentUser.uid).get();
    setCurrentUserData({...data.data(), email: user ? user.email : currentUser.email});
  }, [currentUser]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        await sync(user);
      }
      setCurrentUser(user);
      setLoading(false);
    });
  }, [sync]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUserData,
        sync
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
