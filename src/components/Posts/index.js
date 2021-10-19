import React from "react";

import {
  Post,
  PostsWrapper,
} from "./styles";
import PostElement from "./Post";

export default function Posts(props) {
  const {data: posts} = props;

  return (
    <PostsWrapper>
      {posts.map(
        (props, key) => {
          const post = props.data();

          return (
            <Post key={key}>
              <PostElement post={post} uid={props.id} />
            </Post>
          );
        }
      )}
    </PostsWrapper>
  );
}