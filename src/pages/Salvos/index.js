import React from 'react';

import { Feed } from './styles';

import Posts from '../../components/Posts';
import SavedPostsHook from "../../hooks/user/savedPosts";

export default function Salvos() {
    const props = SavedPostsHook();

    return (
        <Feed>
            <Posts {...props} />
        </Feed>
    )
}
