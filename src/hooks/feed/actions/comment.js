import { useEffect, useState, useCallback, useContext } from "react";

import { AuthContext } from "../../../providers/Auth";
import { getComments, createComment } from "../../../services/feed/comment";

function ShowComments() {
    const [showComments, setShowComments] = useState(false);

    const handleClick = useCallback(async () => {
        setShowComments(!showComments);
    }, [showComments]);

    return {showComments, handleClick};
};

export default function Comments(props) {
    const {currentUser} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {postUid, reset} = props;

    const refresh = useCallback(async () => {
        setLoading(true);
        setData(await getComments(postUid));
        setLoading(false);
    }, [postUid]);

    const cleanForm = useCallback(() => reset(), [reset]);

    const onSubmit = useCallback(async (data) => {
        await createComment({postUid, uid: currentUser?.uid, ...data});
        cleanForm();
        refresh();
    }, [postUid, currentUser, cleanForm, refresh]);

    useEffect(() => {
        refresh();
    }, [refresh]);

    return {data, refresh, onSubmit, loading};
};

export {ShowComments}