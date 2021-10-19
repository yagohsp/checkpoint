import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";

import { ProfilePhoto } from "../../../components";

import {
  Animation,
  Comment,
  CommentInput,
  CommentsWrapper,
  InputWrapper,
  PostCommentButton,
} from "./styles";
  
export default function Comments() {
  const [commentsLength, setCommentsLength] = useState(0);

  useEffect(() => {
    setCommentsLength(3);
  }, []);

  return (
    <Animation commentsLength={commentsLength}>
      <CommentsWrapper>
        <Comment>
          <ProfilePhoto />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            interdum gravida felis, vel pretium augue vulputate at. Pellentesque
            vulputate lacus sem, sit amet faucibus metus hendrerit a. Nullam
            varius luctus velit, in dignissim est molestie ut. Phasellus at nisi
            velit. Cras dui tortor, hendrerit ac vulputate ut, mollis eget mi.
            Quisque vel commodo dui, et volutpat purus. Maecenas malesuada sem
            ut erat consequat luctus.
          </p>
        </Comment>
        <Comment>
          <ProfilePhoto />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            interdum gravida felis, vel pretium augue vulputate at. Pellentesque
            vulputate lacus sem, sit amet faucibus metus hendrerit a. Nullam
            varius luctus velit, in dignissim est molestie ut. Phasellus at nisi
            velit. Cras dui tortor, hendrerit ac vulputate ut, mollis eget mi.
            Quisque vel commodo dui, et volutpat purus. Maecenas malesuada sem
            ut erat consequat luctus.
          </p>
        </Comment>

        <InputWrapper>
          <CommentInput placeholder="O que você achou dessa publicação?" />
          <PostCommentButton type="submit">
            <IoSend />
          </PostCommentButton>
        </InputWrapper>
      </CommentsWrapper>
    </Animation>
  );
}
