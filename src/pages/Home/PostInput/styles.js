import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export const BarWrapper = styled.div`
  position: relative;
  display: flex;
  color: #fff;
  background-color: #23012c;
  border-bottom: 1px solid #834f95;
  border-top: 1px solid #834f95;
  padding: 0.5rem 3rem 0.5rem 1.5rem;
  @media screen and (max-width: 997px) {
    padding-top: 60px;
  }

  > img {
    width: 5rem;
    height: 5rem;
  }
`;

export const PostForm = styled.form`
  width: 100%;
  margin-right: 3rem;
`;

export const PostFormError = styled.h6`
  position: absolute;
  padding-left: 1rem;
  color: red;
`;

export const InputDiv = styled.div`
  padding-left: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 50px;
  }
`;

export const Input = styled(TextareaAutosize)`
  width: 100%;
  outline: 0;
  padding: 1rem;
  font-size: 1.8rem;
  &::placeholder {
    color: #acacac;
  }
  @media screen and (min-width: 998px) {
    padding-top: 1.75rem;
  }
  @media screen and (max-width: 997px) {
    padding-top: 1rem;
    margin-right: 20px;
  }
`;

export const PostButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  /* pointer-events: none;
  cursor: default; */
  &:hover svg {
    fill: #bc54e0;
  }
  svg {
    fill: #acacac;
    transition: fill 0.15s ease;
    height: 2.8rem;
    width: 2.8rem;
  }
  @media screen and (max-width: 997px) {
    top: calc(50% + 15px);
  }
`;

export const DownsideDiv = styled.div`
  display: flex;
  padding-top: 0.5em;
`;

export const AttachmentButton = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 1rem;
  margin-left: 2rem;
  &:hover svg {
    fill: #bc54e0;
  }
  svg {
    fill: #acacac;
    transition: fill 0.15s ease;
    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
`;

export const UploadLabel = styled.label`
  display: flex;
`;

export const FileUpload = styled.input`
  display: none;
`;

export const FileName = styled.h6`
  padding-top: 1rem;
`;

export const RemoveFileButton = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 1rem;
  &:hover svg {
    fill: #c8000b;
  }
  svg {
    fill: #acacac;
    transition: fill 0.15s ease;
    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
`;
