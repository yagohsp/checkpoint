import { useState, useEffect, useCallback, useContext } from "react";

import { AuthContext } from "../../providers/Auth";
import { getSavedPosts } from "../../services/user/posts";

export default function SavedPosts() {
    const {currentUserData} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const refresh = useCallback(async () => {
        if(!currentUserData) return ;
        setLoading(true);
        setData(await getSavedPosts(currentUserData?.Salvos));
        setLoading(false);
    }, [currentUserData]);

    useEffect(() => {
        refresh();
    }, [refresh, currentUserData]);

    return {data, refresh, loading};
};