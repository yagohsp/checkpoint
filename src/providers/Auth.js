import React, { useEffect, useState } from "react";
import firebase, { db } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        const data = await db.collection("usuários").doc(user.uid).get();
        setCurrentUserData(data.data());
      }
      setCurrentUser(user)
      setLoading(false)
    });
  }, []);

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
