import React, { useEffect, useRef } from "react";

export default function Input(props={}) {
    const field = useRef(null);
    const {defaultValue, ...rest} = props;

    useEffect(() => {
        if(!field.current) return ;

        field.current.value = defaultValue;
    }, [field, defaultValue])

    return <input ref={field} {...rest} />;
};