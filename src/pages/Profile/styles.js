import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 1rem;
  @media screen and (max-width: 997px) {
    padding-top: 50px;
  }
`;

export const BackgroundBanner = styled.div`
  pointer-events: none;
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity ease 0.3s;
  img {
    width: 100%;
  }
  @media screen and (min-width: 998px) {
    top: 3rem;
  }
  @media screen and (max-width: 997px) {
    top: 50px;
  }
`;

export const ShowBackgroundButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  svg {
    color: rgba(255, 255, 255, 0.5);
    height: 3rem;
    width: 3rem;
    transition: color ease 0.2s;
  }
  &:hover svg {
    color: #bc54e0;
  }
`;

export const EditProfileLink = styled(Link)`
  position: absolute;
  right: 5rem;
  top: 1rem;
  svg {
    color: rgba(255, 255, 255, 0.5);
    height: 3rem;
    width: 3rem;
    transition: color ease 0.2s;
  }
  &:hover svg {
    color: #bc54e0;
  }
`;

export const User = styled.div`
  position: relative;
  background-color: rgba(35, 1, 44, 0.6);
  border: 2px solid rgba(131, 79, 149, 0.8);
  padding: 3rem 3rem 1.3rem;
`;

export const ImageAndName = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 12rem;
    height: 12rem;
  }
  h1 {
    color: #fff;
    font-size: 4.5rem;
    margin-left: 2.5rem;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.8rem;
  margin-top: 3rem;
`;

export const Stats = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 2rem;
    svg {
      height: 2.2rem;
      width: 2.2rem;
      margin-right: 0.6rem;
    }
  }
  @media screen and (min-width: 998px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 997px) {
    margin-top: 10px;
    flex-direction: column;
    > div {
      margin-top: 14px;
    }
  }
`;
