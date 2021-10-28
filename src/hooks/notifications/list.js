import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../providers/Auth";

export default function NotificationsList() {
    const {currentUserData} = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if(currentUserData) setData(currentUserData.Notificacoes);
    }, [currentUserData]);

    return {data};
};