import { useContext, useState, useEffect, useCallback, useRef } from "react";

import { AuthContext } from "../../../providers/Auth";
import { ChatContext } from "../../../providers/Chat";
import { createTrigger as createTriggerChat } from "../../../services";
import { findChatUid, getChat } from "../../../services/user/chat";

export default function Messages() {
    const {currentUser} = useContext(AuthContext);
    const {focus, changeChatUid} = useContext(ChatContext);
    const [data, setData] = useState([]);
    const unsubscribe = useRef(null);
    const [loading, setLoading] = useState(false);

    const createTrigger = useCallback(async () => {
        setData([]);
        if(!focus) return ;

        setLoading(true);
        const chatuid = await findChatUid([currentUser.uid, focus]);
        changeChatUid(chatuid);
        const trigger = await createTriggerChat(`chats/${chatuid}`);
        unsubscribe.current = trigger.onSnapshot({
            next: async (snapshot) => {
                const chatData = await getChat(snapshot.id);
                setData(chatData?.messages ? chatData?.messages : []);
            }
        });
        setLoading(false);
    }, [changeChatUid, currentUser, focus]);

    useEffect(() => {
        if(unsubscribe.current) unsubscribe.current();
        createTrigger()
    }, [createTrigger, focus]);

    return {data, loading, uid: currentUser.uid};
};