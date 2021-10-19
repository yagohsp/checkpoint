import { useState, useEffect, useCallback, useContext } from "react";

import { AuthContext } from "../../../providers/Auth";
import { like as likePost, deslike as deslikePost } from "../../../services/feed/posts";

export default function Like(props) {
    const {currentUser} = useContext(AuthContext);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const {
        postUid,
        Curtidas
    } = props;

    useEffect(() => {
        setLiked(Curtidas?.includes(currentUser?.uid));
        setLikeCount(Curtidas?.length);
    }, [Curtidas, currentUser]);

    const like = useCallback(async () => {
        const likes = await likePost(postUid, currentUser?.uid);
        setLikeCount(likes?.length);
        setLiked(true);
    }, [postUid, currentUser]);

    const deslike = useCallback(async () => {
        const likes = await deslikePost(postUid, currentUser?.uid);
        setLikeCount(likes?.length);
        setLiked(false);
    }, [postUid, currentUser]);

    const handleClick = useCallback(() => liked ? deslike() : like(), [liked, deslike, like]);

    return {liked, likeCount, handleClick};
};