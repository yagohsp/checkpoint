import styled from "styled-components";

import { Filled } from '../../../components/Filled';

export const PostsWrapper = styled.div`
  margin-top: 2rem;
`;

export const Post = styled(Filled)`
  display: flex;
  padding: 1.5rem 2rem 1.5rem 0;
  border-left: none;
  border-right: none;
  margin-top: 1rem;
`;

export const Poster = styled.div`
  margin-right: 2rem;
  img{
    width: 12rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  img{
    width: 3.8rem;
    margin-right: 1rem;
  }
`;

export const Description = styled.div`
  margin-top: 3rem;
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  button{
    padding: 1rem;
    margin-right: 6rem;
    &:hover{
      svg{
        fill: #bc54e0;
      }
    }
    svg{
      width: 2.5rem;
      height: 2.5rem;
      transition: fill .15s ease;
    }
  }
`;