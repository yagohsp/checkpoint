import React from "react";

import { motion } from "framer-motion";

function HideByHeight(props) {
    const {
        hide,
        children
    } = props;

    return (
        <motion.div animate={{ height: hide ? '0' : '100%' }}>
            {children}
        </motion.div>
    );
};

export {HideByHeight}