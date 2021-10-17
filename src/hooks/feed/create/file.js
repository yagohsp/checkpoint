import { useState, useCallback, useRef } from "react";

export default function File() {
    const [file, setFile] = useState(null);
    const hiddenFileInput = useRef(null);

    const handleClick = useCallback(() => hiddenFileInput.current?.click(), []);

    const handleChange = useCallback((event) => setFile(event.target.files[0]), []);

    const cleanFile = useCallback(() => setFile(null), []);

    return {file, hiddenFileInput, handleClick, handleChange, cleanFile};
};