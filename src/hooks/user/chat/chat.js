import { useContext, useState, useEffect, useCallback } from "react";

import { AuthContext } from "../../../providers/Auth";
import { ChatContext } from "../../../providers/Chat";
import { createTrigger as createTriggerChat } from "../../../services/user/chat";

export default function Chat() {
    const {currentChatting} = useContext(ChatContext);

    return {currentChatting};
};

export function Messages() {
    const {currentUser} = useContext(AuthContext);
    const {focus} = useContext(ChatContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const createTrigger = useCallback(async () => {
        if(!focus) {
            setData([]);
            return ;
        }

        setLoading(true);
        const trigger = await createTriggerChat([currentUser.uid, focus]);
        const unsubscribe = trigger.onSnapshot((snapshot) => console.warn(snapshot));
        setLoading(false);
    }, [currentUser, focus]);

    useEffect(() => createTrigger(), [createTrigger, focus])

    return {data, loading};
};