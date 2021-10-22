import { useState, useCallback, useRef, useContext, useEffect } from "react";

import { AuthContext } from "../../providers/Auth";

export default function Ui() {
    const {currentUserData} = useContext(AuthContext);
    const containerRef = useRef(null);
    const [showBackground, setShowBackground] = useState(false);
    const [excludedUids, setExcludedUids] = useState([]);

    const changeShowBackground = useCallback((show) => setShowBackground(show), []);

    useEffect(() => {
        if(!currentUserData) return ;
        var exclude = currentUserData.AmigosUid;
        exclude.push(currentUserData.uid);
        setExcludedUids(exclude);
    }, [currentUserData]);

    return {containerRef, showBackground, changeShowBackground, excludedUids};
};