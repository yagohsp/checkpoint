import { useState, useContext, useEffect, useCallback } from "react";

import { AuthContext } from "../../providers/Auth";
import ConditionalAddUidsModel from "../../models/profile/conditional-add-uids";
import { addFriendRequest } from "../../services/user/friends";

export default function Profile(props={}) {
    const {uid} = props;
    const {currentUserData} = useContext(AuthContext);
    const [conditionalAddUids, setConditionalAddUids] = useState(ConditionalAddUidsModel());
    const [loading, setLoading] = useState(false);

    const addFriend = useCallback(async () => {
        setLoading(true);
        await addFriendRequest({
            from: currentUserData.uid, 
            to: uid
        });
        setLoading(false);
    }, [currentUserData, uid]);

    useEffect(() => {
        if(!currentUserData) return ;
        var exclude = ConditionalAddUidsModel();
        exclude.hide = [
            ...currentUserData.AmigosUid, 
            currentUserData.uid,
            ...currentUserData.Pedidos?.Enviados,
            ...currentUserData.Pedidos?.Recebidos
        ];
        setConditionalAddUids(exclude);
    }, [currentUserData]);

    return {conditionalAddUids, addFriend, loading};
};