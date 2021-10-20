import React from 'react';

import PostsHook from "../../hooks/feed/list/posts";
import PostInput from './PostInput';
import Posts from '../../components/Posts';

export default function Home() {
    const props = PostsHook();

    return (
        <>
            <PostInput refresh={props.refresh} />
            <Posts {...props} />
        </>
    )
}
