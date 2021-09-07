import styled from "styled-components";
import { Filled } from "../../../Filled";

export const Friends = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Dropdown = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-weight: 500;
  color: #fff;
  padding: 1rem 0;
  transition: color 0.15s ease;
  svg {
    margin-left: 2rem;
  }
  &:hover{
    color: #bc54e0;
  }
`;

export const ScrollList = styled.ul`
  height: 33rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    margin-bottom: 2rem;
  }
`;

export const Friend = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #23012C;
  border: 2px solid #834F95;
  border-left: none;
  color: #fff;
  padding: 0.8rem;
  transition: background-color 0.15s ease;
  &:hover{
    background-color: transparent;
  }
  img {
    width: 4rem;
    margin-right: 1.5rem;
  }
`;
