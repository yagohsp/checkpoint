import { useState, useEffect, useCallback } from "react";

import { getDocReference } from "../../services";

export default function PostUserData(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setData(await getDocReference(props?.post?.Usuario));
        setLoading(false);
    }, [props]);    

    useEffect(() => {
        load();
    }, [load])

    return {data, loading};
};