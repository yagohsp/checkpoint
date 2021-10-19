import { useState, useEffect, useCallback, useContext } from "react";

import { getFriends } from "../../services/user/friends";
import { AuthContext } from "../../providers/Auth";

export default function Friends() {
    const {currentUserData} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [hide, setHide] = useState(false);
    const [loading, setLoading] = useState(false);

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

    return {data, loading, hide, changeDisplay};
};