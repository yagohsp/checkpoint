import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #bc54e0;
  p {
    color: #fff;
    white-space: nowrap;
  }
  @media screen and (min-width: 998px) {
    width: 0%;
    overflow: hidden;
    transition: width 0.4s ease;
    position: absolute;
    top: -2px;
    left: -2px;
    ${({ animate }) =>
      animate &&
      css`
        width: calc(100% + 4px);
      `}
  }
  @media screen and (max-width: 997px) {
    margin-top: 4.5rem;
  }
`;

export const GameFilters = styled.div`
  overflow: hidden;
  max-height: 4.5rem;
  transition: max-height 0.4s ease;
  ${({ showAllFilters }) =>
    showAllFilters &&
    css`
      max-height: 23rem;
    `}
`;

export const GameInputWrapper = styled.div`
  height: 4.5rem;
  position: relative;
  color: #fff;
  border-bottom: 1px solid rgba(188, 84, 224, 0.4);
`;

export const FieldFilter = styled(GameInputWrapper)`
  border-bottom: 2px solid rgba(188, 84, 224, 0.75);
`;

export const Results = styled.div`
  border-bottom: 1px solid #834f95;
  transition: padding-top 0.4s ease;
  @media screen and (min-width: 998px) {
    padding-top: 9rem;
    ${({ showAllFilters }) =>
      showAllFilters &&
      css`
        padding-top: 27rem;
      `}
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  padding-left: 1.5rem;
  padding-top: 2.1rem;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-120%) translateX(-0.4rem);
    font-size: 1.2rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  transition: transform 0.15s ease, font-size 0.15s ease;
`;

export const User = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  img {
    width: 5.5rem;
    height: 5.5rem;
  }
`;

export const Nickname = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: #fff;
  margin-left: 1.5rem;
`;

export const UserData = styled.div`
  display: flex;
  @media screen and (min-width: 998px) {
    align-items: center;
    margin-left: 3rem;
  }
  @media screen and (max-width: 997px) {
    flex-direction: column;
  }
`;

export const UserStats = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
    color: #fff;
    svg {
      height: 2.2rem;
      width: 2.2rem;
      margin-right: 0.6rem;
    }
  }
  @media screen and (min-width: 998px) {
    flex-direction: column;
    div:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 997px) {
    margin-bottom: 1rem;
    > div:first-of-type {
      margin-right: 1rem;
    }
  }
`;

export const GameStats = styled.div`
  margin-left: 3rem;
  p {
    display: flex;
    color: #fff;
    text-align: left;
    margin-top: 0.3rem;
    strong {
      display: block;
      width: 50%;
      margin-left: 1rem;
    }
  }
  @media screen and (min-width: 998px) {
    p {
      width: 25rem;
    }
  }
`;
