import { useState, useEffect, useCallback, useContext } from "react";

import { getFriends } from "../../services/user/friends";
import { AuthContext } from "../../providers/Auth";
import { ChatContext } from "../../providers/Chat";

export default function Friends() {
    const {currentUserData} = useContext(AuthContext);
    const {addToChat} = useContext(ChatContext);
    const [data, setData] = useState([]);
    const [hide, setHide] = useState(false);
    const [loading, setLoading] = useState(false);

    const userMessageClick = useCallback((useruid) => addToChat(useruid), [addToChat]);

    const changeDisplay = useCallback(() => setHide(!hide), [hide]);

    const refresh = useCallback(async () => {
        setLoading(true);
        setData(await getFriends(currentUserData.Amigos));
        setLoading(false);
    }, [currentUserData]);

    useEffect(() => {
        if(currentUserData)
            refresh();
    }, [refresh, currentUserData]);

    return {userMessageClick, data, loading, hide, changeDisplay};
};