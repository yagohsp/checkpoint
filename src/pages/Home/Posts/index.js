import React from "react";

import {
  Post,
  PostsWrapper,
} from "./styles";
import PostElement from "./Post";
import PostsHook from "../../../hooks/feed/posts";

export default function Posts() {
  const {data: posts} = PostsHook();

  return (
    <PostsWrapper>
      {posts.map(
        (props, key) => {
          const post = props.data();

          return (
            <Post key={key}>
              <PostElement post={post} />
            </Post>
          );
        }
      )}
    </PostsWrapper>
  );
}