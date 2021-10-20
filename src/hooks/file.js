import { useState, useCallback, useRef, useEffect } from "react";

import { fileToBase64 } from "../util/files";

export default function File(props) {
    const [file, setFile] = useState(null);
    const hiddenFileInput = useRef(null);
    const {base64, defaultFile} = props;

    const handleClick = useCallback(() => hiddenFileInput.current?.click(), []);

    const handleChange = useCallback(async (event) => {
        if(base64) {
            setFile(await fileToBase64(event.target.files[0]))
            return ;
        }
        setFile(event.target.files[0]);
    }, [base64]);

    const cleanFile = useCallback(() => setFile(null), []);

    useEffect(() => {if(defaultFile) setFile(defaultFile)}, [defaultFile]);

    return {file, hiddenFileInput, handleClick, handleChange, cleanFile};
};