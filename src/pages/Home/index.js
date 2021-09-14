import React from 'react';

import { Feed } from './styles';

import CreatePostBar from './CreatePostBar';
import Posts from './Posts';

export default function Home() {
    return (
        <Feed>
            <CreatePostBar />
            <Posts />
        </Feed>
    )
}
