import React, { useState, useCallback } from "react";

import { arrayRemove } from "../util/array";

export const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [currentChatting, setCurrentChatting] = useState([]);
  const [focus, setFocus] = useState(null);
  const [chatuid, setChatuid] = useState(null);

  const addToChat = useCallback((useruid) => {
    if(!currentChatting.includes(useruid)){
      var current = currentChatting;
      current.push(useruid);
      setCurrentChatting(current);
    }
    setFocus(useruid);
  }, [currentChatting]);

  const removeFromChat = useCallback((useruid) => {
    var current = arrayRemove(currentChatting, useruid);
    setCurrentChatting(current);
    setFocus(null);
    setChatuid(null);
  }, [currentChatting]);

  const requestFocus = useCallback((useruid) => setFocus(useruid), []);

  const changeChatUid = useCallback((chatuid) => setChatuid(chatuid), []);

  return (
    <ChatContext.Provider
      value={{
        currentChatting,
        addToChat,
        removeFromChat,
        focus,
        requestFocus,
        chatuid,
        changeChatUid
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
