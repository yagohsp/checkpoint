import { useState, useCallback, useRef } from "react";

export default function Ui() {
    const containerRef = useRef(null);
    const [showBackground, setShowBackground] = useState(false);
    const [showTab, setShowTab] = useState("posts");

    const changeShowBackground = useCallback((show) => setShowBackground(show), []);

    const changeTab = useCallback((tab) => setShowTab(tab), []);

    return {containerRef, showBackground, changeShowBackground, showTab, changeTab};
};