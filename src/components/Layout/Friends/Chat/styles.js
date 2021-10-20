import styled from "styled-components";

export const ChatWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #834f95;
  border-left: 0;
`;

export const FriendsScroll = styled.div`
  width: 100%;
  height: 6rem;
  overflow-x: auto;
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputMessageForm = styled.form`
  position: relative;
`;

export const InputMessage = styled.input`
  height: 4.5rem;
  width: 100%;
  outline: 0;
  color: #fff;
  font-size: 1.4rem;
  border-top: 2px solid #834f95;
  padding: 0 1rem;
  transition: background-color 0.15s ease, color 0.15s ease;
  &:hover,
  &:focus,
  &:not(:placeholder-shown) {
    background-color: #23012c;
  }
  &:not(:placeholder-shown) ~ button svg {
    color: #bc54e0;
  }
  &::placeholder {
    color: #acacac;
  }
`;

export const SendMessageButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border-radius: 50%;
  transition: background-color 0.15s ease;
  color: #acacac;
  svg {
    height: 1.9rem;
    width: 1.9rem;
    transition: color 0.15s ease;
  }
  &:hover svg {
    background-color: #321342;
  }
`;
