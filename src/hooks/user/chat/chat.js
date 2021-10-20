import { useContext, useCallback, useState } from "react";

import { AuthContext } from "../../../providers/Auth";
import { ChatContext } from "../../../providers/Chat";
import { sendMessage } from "../../../services/user/chat";

export default function Chat(props) {
    const {currentUser} = useContext(AuthContext);
    const {currentChatting, chatuid} = useContext(ChatContext);
    const [loading, setLoading] = useState(false);
    const {reset} = props;

    const cleanForm = useCallback(() => reset(), [reset]);

    const onSubmit = useCallback(async (data) => {
        if(!chatuid) return ;
        setLoading(true);
        await sendMessage({
            uid: chatuid,
            useruid: currentUser?.uid,
            ...data
        });
        cleanForm();
        setLoading(false);
    }, [chatuid, currentUser, cleanForm]);

    return {currentChatting, onSubmit, loading};
};