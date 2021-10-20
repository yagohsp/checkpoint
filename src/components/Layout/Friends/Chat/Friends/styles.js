import styled from "styled-components";

export const FriendButton = styled.div`
  cursor: pointer;
  display: flex;
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
  div {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    height: 100%;
  }
  span {
    white-space: nowrap;
    display: block;
    color: #fff;
    transition: color 0.15s ease;
    margin-left: 1rem;
  }
  ${(props) => props?.focused && `{
    background-color: #bc54e0;
    &:hover {
      background-color: #bc54e0;
      span {
        color: #fff;
      }
    }
  }`}
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
