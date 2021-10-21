import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { css } from "styled-components";
import { Filled } from "../../Filled";

export const Animation = styled.div`
  max-height: 0;
  overflow: hidden;
  ${({ commentsLength }) =>
    commentsLength &&
    css`
      max-height: ${commentsLength * 150 + 50}px;
      transition: max-height ${commentsLength * 0.15}s;
    `}
`;

export const CommentsWrapper = styled(Filled)`
  position: relative;
  border-top: 0;
  border-left: 0;
  @media screen and (min-width: 998px) {
    width: 95%;
  }
  @media screen and (max-width: 997px) {
    width: 100%;
    border-right: 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  border-top: 1px solid #834f95;
  padding: 1.5rem;
  margin-top: 1rem;
`;

export const CommentInput = styled(TextareaAutosize)`
  width: 90%;
  outline: 0;
  &::placeholder {
    color: #acacac;
  }
`;

export const PostCommentButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  /* pointer-events: none;
  cursor: default; */
  &:hover svg {
    fill: #bc54e0;
  }
  svg {
    fill: #acacac;
    transition: fill 0.15s ease;
    height: 2rem;
    width: 2rem;
  }
`;

export const Comment = styled.div`
  display: flex;
  padding: 2rem;
  div {
    margin-left: 1rem;
  }
  p {
    margin-top: 0.3rem;
    font-size: 1.5rem;
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const UserPhoto = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

export const CommentForm = styled.form``;
