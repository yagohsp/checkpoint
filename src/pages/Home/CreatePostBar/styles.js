import styled from "styled-components";

export const BarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #23012C;
  border-bottom: 1px solid #834F95;
  border-top: 1px solid #834F95;
  padding: .5rem 3rem .5rem 1.5rem;
  @media screen and (min-width: 998px) {
    height: 10rem;
  }
  @media screen and (max-width: 997px) {
    padding-top: 80px;
  }
` 

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img{
    width: 50px;
  }
`;

export const PostInput = styled.textarea`
  width: 100%;
  height: 40px;
  outline: 0;
  padding: 1rem;
  &::placeholder{
    color: #acacac;
  }
  @media screen and (max-width: 997px) {
    margin-right: 20px;
  }
`;

export const PostButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  /* pointer-events: none;
  cursor: default; */
  &:hover svg{
    fill: #bc54e0;
  }
  svg{
    fill: #acacac;
    transition: fill .15s ease;
    height: 2.8rem;
    width: 2.8rem;
  }
  @media screen and (max-width: 997px) {
    top: calc(50% + 15px);
  }
`;

export const AttachmentButton = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: 5rem;
  &:hover svg{
    fill: #bc54e0;
  }
  svg{
    fill: #acacac;
    transition: fill .15s ease;
    &:not(:last-of-type){
      margin-right: 1.5rem;
    }
  }
`;