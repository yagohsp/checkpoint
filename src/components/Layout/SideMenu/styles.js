import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 998px) {
    max-width: 33rem;
    width: 100%;
    position: sticky;
    top: 3rem;
    align-self: flex-start;
  }
`;

export const SearchBar = styled.input`
  position: relative;
  font-size: 1.8rem;
  height: 4.3rem;
  outline: 0;
  padding-left: 4.5rem;
  &::placeholder {
    color: #999;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 3rem;
  li {
    position: relative;
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
  padding: 1.1rem;
  img {
    width: 4.5rem;
    margin-right: 1.5rem;
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
