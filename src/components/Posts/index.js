import React from "react";

import Post from "./Post";
import { PostsWrapper } from "./styles";

export default function Posts(props) {
  const { data: posts } = props;

  return (
    <PostsWrapper>
      {posts.map((props, key) => {
        const post = props.data();

        return <Post key={key} post={post} uid={props.id} />;
      })}
    </PostsWrapper>
  );
}
