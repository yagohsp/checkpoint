import { useState, useEffect, useCallback } from "react";

import { getUser } from "../../services/user/friends";

export default function NotificationData(props={}) {
    const {uid} = props;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const changeLoading = useCallback((bool) => setLoading(bool), []);

    useEffect(() => {
        if(!uid) return ;
        (async () => {
            setLoading(true);
            setData({
                uid: uid,
                ...await getUser(uid)
            });
            setLoading(false);
        })()
    }, [uid]);

    return {loading, data, changeLoading};
};