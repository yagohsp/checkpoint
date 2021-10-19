import { useState, useCallback, useContext } from "react";

import { AuthContext } from "../../../providers/Auth";
import { createPost } from "../../../services/feed/posts";

export default function CreatePost(props) {
    const {currentUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const {
        reset,
        file,
        cleanFile,
        refresh
    } = props;

    const cleanForm = useCallback(() => {
        reset();
        cleanFile();
    }, [reset, cleanFile]);

    const onSubmit = useCallback(async (data) => {
        setLoading(true);
        await createPost({...data, file, uid: currentUser.uid});
        cleanForm();
        refresh();
        setLoading(false);
    }, [file, currentUser, cleanForm, refresh]);

    return {onSubmit, loading};
};