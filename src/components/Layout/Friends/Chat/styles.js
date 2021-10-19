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

export const Friend = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-right: 1px solid #834f95;
  border-left: 1px solid #834f95;
  border-bottom: 2px solid #834f95;
  border-top: 0;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: #23012c;
    span {
      color: #bc54e0;
    }
  }
  &:first-of-type {
    border-left: 0;
  }
  img {
    height: 100%;
  }
  span {
    display: block;
    color: #fff;
    transition: color 0.15s ease;
    margin-left: 1rem;
  }
`;

export const CloseFriend = styled.button`
  color: #fff;
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 50%;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: #321342;
    svg {
      color: #bc54e0;
    }
  }
  svg {
    transition: color 0.1s ease;
    height: 1.8rem;
    width: 1.8rem;
  }
`;

export const Messages = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputMessageWrapper = styled.div`
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
  pointer-events: none;
  cursor: default;
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
