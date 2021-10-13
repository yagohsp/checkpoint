import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #8100c2, #a700fa)                        ;
`;

export const ProfileForm = styled.form`
  width: 85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 20px 5px rgba(0,0,0,.2);
  padding: 3rem;
  border-radius: 1rem;
  input{
    margin-top: 1rem;
  }
  @media screen and (max-width: 997px) {
    max-width: 90%
  }
`;

export const Title = styled.h1`
  color: #32014a;
  margin-bottom: 2.8rem;
`;

export const SkipStep = styled(Link)`
  font-size: 1.4rem;
  font-weight: 300;
  color: #8100c2;
  margin-left: auto;
  margin-top: 1rem;
  @media screen and (min-width: 998px) {
    &:hover{
      text-decoration: underline;
    }
  ;
`