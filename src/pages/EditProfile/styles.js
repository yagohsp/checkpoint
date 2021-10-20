import styled from "styled-components";

export const ContainerForm = styled.form`
  height: 100%;
  width: 100%;
  background-color: #23012c;
  @media screen and (min-width: 998px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 997px) {
    padding: 1rem 2rem;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 2.4rem;
`;

export const BasicStats = styled.div`
  display: flex;
  @media screen and (max-width: 997px) {
    flex-direction: column-reverse;
  }
`;

export const FlexColumn = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 998px) {
    width: 55%;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  border: 2px solid #7a448c;
  background-color: #2e0439;
  padding: 0.5rem 0.7rem;
  margin-bottom: 1.5rem;
`;

export const PictureInput = styled(InputWrapper)`
  label {
    display: block;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  img {
    margin: 0 auto 1.5rem;
    height: 17rem;
    width: 17rem;
  }
`;

export const BannerInput = styled(InputWrapper)`
  padding: 0.5rem 1rem 1rem;
  label {
    display: block;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 998px) {
    margin-left: 3rem;
  }
`;

export const Label = styled.label`
  display: block;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0 0.5rem 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  color: #fff;
  padding: 0.5rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  color: #fff;
  padding: 0.5rem;
`;

export const GameContent = styled.div`
  background-color: #2e0439;
  border: 2px solid #834f95;
  padding: 1.4rem 1.8rem;
  h3 {
    color: #fff;
  }
`;

export const GameStats = styled.div`
  width: 100%;
  display: flex;
  align-content: space-evenly;
  div {
    text-align: center;
    margin: auto;
    margin-top: 1.5rem;
    max-width: 23%;
    background-color: #3e074d;
    border: 2px solid #834f95;
    padding: 0.2rem 1rem;
    label {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 500;
    }
    input {
      text-align: center;
      max-width: 8rem;
      outline: 0;
      color: #fff;
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 997px) {
    flex-wrap: wrap;

  }
`;

export const Screenshots = styled.div`
  min-height: 4.5rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: #3e074d;
  border: 2px solid #834f95;
  padding: 4rem 1rem 1rem;
  margin-top: 1.5rem;
  label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Screenshot = styled.div`
  width: 48%;
  display: flex;
  padding: 0.5rem;
  button {
    position: absolute;
    svg {
      fill: #fff;
      &:hover {
        fill: #909090;
      }
    }
  }
`;

export const AddImage = styled.div`
  width: 100%;
  background-color: #673ab7;
  display: flex;
  min-height: 10rem;
  justify-content: center;
  align-items: center;
  svg {
    width: 4.7rem;
    height: 4.7rem;
    fill: #fff;
  }
  &:hover {
    background-color: #745ba0;
  }
  margin-bottom: 1rem;
  &:nth-of-type(2n - 1) {
    margin-right: 4%;
  }
`;

export const SpaceBetweenDiv = styled.div`
  display: flex;
  place-content: space-between;
  place-items: self-start;
  svg {
    fill: #fff;
    height: 4.5rem;
    width: 4.5rem;
    transition: color 0.15s ease;
    &:hover {
      fill: #7a448c;
    }
  }
  ${(props) => props?.styles && props?.styles}
`;

export const LittleButton = styled.button`
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const GameTitle = styled.h3`
  place-content: space-between;
  display: flex;
  input {
    outline: 0;
    color: #fff;
  }
  button {
    &:hover {
      background-color: #321342;
      svg {
        color: #f44336;
      }
    }
  }
`;
