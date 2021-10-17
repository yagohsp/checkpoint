import { useState, useEffect, useCallback } from "react";

import { getPosts } from "../../../services/feed/posts";

export default function Posts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const refresh = useCallback(async () => {
        setLoading(true);
        setData(await getPosts());
        setLoading(false);
    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    return {data, refresh, loading};
};