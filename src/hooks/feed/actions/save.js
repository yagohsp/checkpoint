import { useState, useEffect, useCallback, useContext } from "react";

import { AuthContext } from "../../../providers/Auth";
import { save as savePost, unsave as unsavePost } from "../../../services/user/posts";

export default function Save(props) {
    const {currentUser, currentUserData} = useContext(AuthContext);
    const [saved, setSaved] = useState(false);
    const { postUid } = props;

    useEffect(() => {
        setSaved(currentUserData?.Salvos?.filter(e => e.id === postUid).length > 0);
    }, [currentUserData, postUid]);

    const save = useCallback(async () => {
        await savePost(currentUserData?.Salvos, postUid, currentUser?.uid);
        setSaved(true);
    }, [currentUserData, postUid, currentUser]);

    const unsave = useCallback(async () => {
        await unsavePost(currentUserData?.Salvos, postUid, currentUser?.uid);
        setSaved(false);
    }, [currentUserData, postUid, currentUser]);

    const handleClick = useCallback(() => saved ? unsave() : save(), [save, unsave, saved]);

    return {saved, handleClick};
};