import styled from "styled-components";

import { Filled } from "../../Filled";

export const PostContent = styled(Filled)`
  display: flex;
  padding: 1.5rem 2rem 1.5rem 0;
  border-left: none;
  border-right: none;
  margin-top: 1rem;
  @media screen and (max-width: 997px) {
    position: relative;
    overflow: hidden;
  }
`;

export const Poster = styled.div`
  pointer-events: none;
  margin-right: 2rem;
  @media screen and (min-width: 998px) {
    img {
      width: 12rem;
    }
  }
  @media screen and (max-width: 997px) {
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.15;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
`;

export const Description = styled.div`
  margin-top: 3rem;
  @media screen and (min-width: 998px) {
    margin-bottom: 6rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  button {
    padding: 1rem;
    margin-right: 6rem;
    &:hover {
      svg {
        fill: #bc54e0;
      }
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
      transition: fill 0.15s ease;
    }
  }
  @media screen and (min-width: 998px) {
    position: absolute;
    bottom: 1rem;
    left: 13rem;
  }
  @media screen and (max-width: 997px) {
    margin-top: 2rem;
  }
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  svg {
    fill: ${(props) => props?.liked && "#33b1e6"};
  }
  h3 {
    margin-left: 1rem;
  }
`;

export const LikeCount = styled.h3`
  width: fit-content;
`;