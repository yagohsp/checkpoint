import { useState, useCallback } from "react";

export default function Ui(props={}) {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState("users");

    const changeShow = useCallback((show) => setShow(show), []);

    return {show, changeShow, loading, setLoading};
};