import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (min-width: 998px) {
    max-width: 33rem;
    position: sticky;
    top: 3rem;
    align-self: flex-start;
    flex-direction: column;
  }
  @media screen and (max-width: 997px) {
    z-index: 5;
    height: 100vh;
    position: fixed;
    left: -100%;
    top: 0;
    background-color: #23012c;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 80px;
    padding-left: 40px;
    transition: transform 0.25s ease-in-out;
    ${({ showMenu }) =>
      showMenu &&
      css`
        transform: translateX(100%);
      `}
    &:before {
      opacity: 0.15;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url("https://i.pinimg.com/originals/1b/67/e3/1b67e338c39430d2820c5bb19e137e38.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center 0%;
    }
  }
`;

export const SearchBar = styled.div`
  @media screen and (max-width: 997px) {
    display: none;
  }
  input {
    position: relative;
    font-size: 1.8rem;
    height: 4.3rem;
    outline: 0;
    padding-left: 4.5rem;
    &::placeholder {
      color: #999;
    }
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 3rem;
  li {
    position: relative;
  }
  @media screen and (max-width: 997px) {
    li {
      margin-top: 15px;
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(6) {
        display: none;
      }
    }
  }
`;

export const Link = styled(NavLink)`
  display: block;
  color: #fff;
  font-size: 2rem;
  transition: color 0.15s ease;
  padding: 1.5rem 0 1.5rem 5rem;
  @media screen and (min-width: 998px) {
    &:hover {
      color: #bc54e0;
    }
  }
  &.active {
    color: #bc54e0;
  }
  &.active path {
    fill: #bc54e0;
  }
`;

export const LogoutButton = styled.button`
  @media screen and (min-width: 998px) {
    display: none;
  }
  color: #fff;
  font-size: 2rem;
  transition: color 0.15s ease;
  padding: 1.5rem 0 1.5rem 5rem;
  svg {
    transform: scaleX(-1);
  }
`;

export const LinkIcon = styled.span`
  position: absolute;
  top: 45%;
  left: 0.8rem;
  transform: translateY(-50%);
  svg {
    width: 2.7rem;
    height: 2.7rem;
    path {
      transition: fill 0.2s ease;
      fill: #fff;
    }
  }
`;

export const SearchIcon = styled(LinkIcon)`
  top: 50%;
  left: 1.4rem;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #fff;
  border-right: none !important;
  padding: 1.1rem;
  @media screen and (min-width: 998px) {
    background-color: #23012c;
    border: 2px solid #834f95;
    font-size: 2.2rem;
    img {
      width: 4.8rem;
      height: 4.8rem;
      margin-right: 1.5rem;
    }
  }
  @media screen and (max-width: 997px) {
    color: #fff;
    img {
      width: 7rem;
      height: 7rem;
      margin-right: 2rem;
    }
    span {
      font-size: 2.6rem;
    }
  }
`;

export const MoreButton = styled.button`
  @media screen and (max-width: 997px) {
    display: none;
  }
  margin-left: auto;
  margin-right: 2rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  padding: 0.7rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

export const MoreOptions = styled.div`
  @media screen and (max-width: 997px) {
    display: none;
  }
  position: absolute;
  bottom: -4rem;
  right: 1.2rem;
  background-color: #321342;
  button {
    font-size: 1.9rem;
    transition: color 0.15s ease;
    padding: 1rem 2rem;
    &:hover {
      color: #bc54e0;
    }
  }
  span {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export const CloseMenu = styled.button`
  @media screen and (min-width: 998px) {
    display: none;
  }
  position: absolute;
  top: 5px;
  right: 5px;
  svg {
    fill: #fff;
    height: 40px;
    width: 40px;
  }
`;

export const MobileHeader = styled.div`
  @media screen and (min-width: 998px) {
    display: none;
  }
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  height: 46px;
  width: 100%;
  background-color: #23012c;
  border-bottom: 2px solid #834f95;
  button {
    display: block;
    padding: 4px 15px 5px;
    svg {
      fill: #fff;
      height: 37px;
      width: 37px;
    }
  }
`;

export const MobileFooter = styled.div`
  @media screen and (min-width: 998px) {
    display: none;
  }
  width: 100%;
  height: 50px;
  z-index: 4;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #23012c;
  border-top: 2px solid #834f95;
  padding: 0 11px;
  a {
    padding: 15px;
    svg {
      height: 28px;
      width: 28px;
    }

    &:last-of-type.active path {
      fill: transparent;
      stroke: #bc54e0;
    }
  }
`;
