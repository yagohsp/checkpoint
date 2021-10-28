import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../../components";

export const Container = styled.div`
  @media screen and (max-width: 997px) {
    margin-top: 40px;
  }
`;

export const Status = styled.div`
  color: ${({status}) => status ? "#8bc34a" : "#f44336" };
  align-items: center;
  width: 12rem;
  display: flex;
  svg {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
  }
`;

const NotificationStyles = css`
  padding: 1.5rem;
  border-bottom: 2px solid #834f95;
  img {
    width: 7rem;
    height: 7rem;
  }
  @media screen and (min-width: 998px) {
    display: flex;
  }
  @media screen and (max-width: 997px) {
    display: block;
  }
`;

export const Notification = styled.div`
  ${NotificationStyles}
`;

export const NotificationLink = styled(Link)`
  ${NotificationStyles}
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  p {
    color: #fff;
    margin-left: 1.5rem;
    strong {
      display: inline-block;
      font-size: 2rem;
      color: #fff;
      transform: translateY(1px);
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 998px) {
    padding-left: 2rem;
    margin-left: auto;
  }
  @media screen and (max-width: 997px) {
    margin-left: 10rem;
  }
`;

export const FriendRequestButton = styled(Button)``;

export const AcceptButton = styled(FriendRequestButton)`
  background-color: #7c1499;
  width: 9rem;
  margin-top: 0;
  &:hover {
    background-color: #590d6e;
  }
`;

export const RejectButton = styled(FriendRequestButton)`
  background-color: #a70e3c;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 9rem;
  margin-top: 0;
  &:hover {
    background-color: #810b2e;
  }
`;
