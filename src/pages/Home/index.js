import React from 'react';

import { Feed } from './styles';

import CreatePostBar from './CreatePostBar';
import Posts from './Posts';
import PostsHook from "../../hooks/feed/list/posts";

export default function Home() {
    const props = PostsHook();

    return (
        <Feed>
            <CreatePostBar refresh={props.refresh} />
            <Posts {...props} />
        </Feed>
    )
}
