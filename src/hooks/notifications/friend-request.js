import { useContext, useCallback } from "react";

import { AuthContext } from "../../providers/Auth";
import { resolveFriendRequest } from "../../services/user/friends";

export default function FriendRequestHook(props={}) {
    const {uid, id, changeLoading} = props;
    const {currentUserData} = useContext(AuthContext);

    const resolveRequest = useCallback((decision) => {
        changeLoading(true);
        resolveFriendRequest({
            from: uid, 
            to: currentUserData.uid, 
            id, 
            decision
        });
        changeLoading(false);
    }, [changeLoading, uid, currentUserData, id]);

    const acceptRequest = useCallback(() => resolveRequest("accept"), [resolveRequest]);

    const rejectRequest = useCallback(() => resolveRequest("reject"), [resolveRequest]);

    return {acceptRequest, rejectRequest};
};