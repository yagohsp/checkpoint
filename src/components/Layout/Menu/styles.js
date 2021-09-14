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
    background-color: #23012C;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 80px;
    padding-left: 40px;
    transition: transform .25s ease-in-out;
    ${({showMenu}) => showMenu && css`
      transform: translateX(100%);
    `}
    &:before{
      opacity: .15;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position:absolute;
      top:0;
      left:0;
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
    li{
      margin-top: 15px;
    }
  }
`;

export const Link = styled(NavLink)`
  display: block;
  color: #fff;
  font-size: 2rem;
  transition: color 0.15s ease;
  padding: 1.5rem 0 1.5rem 5rem;
  &.active,
  &:hover {
    color: #bc54e0;
  }
  &.active ~ span path {
    fill: #bc54e0;
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
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  color: #fff;
  padding: 1.1rem;
  img {
    width: 5rem;
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 997px) {
    color: #fff;
  }
`;

export const MoreButton = styled.button`
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

export const CloseMenu = styled.button`
  @media screen and (min-width: 998px) {
    display: none;
  }
  position: absolute;
  top: 5px;
  right: 5px;
  svg{
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
  height: 50px;
  width: 100%;
  background-color: #23012C;
  border-bottom: 2px solid #834F95;
  button{
    display: block;
    padding: 4px 5px 6px;
    margin-left: auto;
    svg{
      fill: #fff;
      height: 40px;
      width: 40px;
    }
  }
`;