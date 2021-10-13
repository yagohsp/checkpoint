import React, { useEffect, useState } from "react";
import firebase, { db } from "../firebase";

export const UserDataContext = React.createContext();

export const UserDataProvider = ({ children }) => {
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        const data = await db.collection("usuários").doc(user.uid).get();
        setCurrentUserData(data.data());
      }
      setLoading(false);
    });
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        currentUserData
      }}
    >
      {!loading && children}
    </UserDataContext.Provider>
  );
};
