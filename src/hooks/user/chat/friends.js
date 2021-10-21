import { useState, useEffect, useCallback, useContext } from "react";

import { ChatContext } from "../../../providers/Chat";
import { getUser } from "../../../services/user/friends";

export default function Friends(props) {
    const {focus, requestFocus, removeFromChat} = useContext(ChatContext);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setData(await getUser(props?.uid));
        setLoading(false);
    }, [props]);

    const handleCloseClick = useCallback(() => removeFromChat(props?.uid), [props, removeFromChat]);
    
    const handleClick = useCallback(() => requestFocus(props?.uid), [props, requestFocus]);

    useEffect(() => {
        load();
    }, [load])

    return {data, loading, focused: focus === props?.uid, handleClick, handleCloseClick};
};