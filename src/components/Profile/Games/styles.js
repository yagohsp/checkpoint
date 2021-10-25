import styled from "styled-components";

export const GameContent = styled.div`
  position: relative;
  &:not(:first-of-type) {
    border-top: 2px solid #834f95;
  }
`;

export const GameTitle = styled.div`
  padding: 1.5rem 1rem;
  h2 {
    color: #fff;
  }
`;

export const GameStats = styled.div`
  width: 100%;
  display: flex;
  align-content: space-evenly;
  border-top: 2px solid #834f95;
  border-bottom: 2px solid #834f95;
  div {
    width: 100%;
    label {
      display: block;
      text-align: center;
      color: #fff;
      font-weight: 500;
    }
    p {
      text-align: center;
      outline: 0;
      color: #fff;
      margin-top: 0.3rem;
    }
  }
  @media screen and (max-width: 997px) {
    flex-direction: column;
    div {
      padding: .5rem 0;
      &:not(:last-of-type) {
        border-bottom: 2px solid #834f95;
      }
    }
  }
  @media screen and (min-width: 998px) {
    div {
      &:not(:last-of-type) {
        border-right: 2px solid #834f95;
      }
    }
  }
`;

export const Screenshots = styled.div`
  min-height: 4.5rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 1rem 1rem;
  label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 500;
  }
  img {
    width: 49%;
    margin-bottom: 1rem;
    &:nth-of-type(2n -1) {
      margin-right: 1%;
    }
    &:nth-of-type(3n -1) {
      margin-left: 1%;
    }
  }
`;

export const Screenshot = styled.div`
  width: 48%;
  display: flex;
  padding: 0.5rem;
`;
