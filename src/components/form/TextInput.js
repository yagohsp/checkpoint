import React from "react";
import styled from "styled-components";

const TextInput = React.forwardRef(
  ({ label, error, customInput: CustomInput, ...props }, ref) => {
    return (
      <TextInputWrapper>
        {error && <Error>{error}</Error>}
        {CustomInput ? <CustomInput /> : <Input ref={ref} {...props} />}
        {label && <Label>{label}</Label>}
      </TextInputWrapper>
    );
  }
);

export default TextInput;

const TextInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  span + input{
    border-bottom-color: #ff0033 !important; 
  }
`;

const Label = styled.label`
  width: 100%;
  color: #8b5ba3;
  font-weight: 500;
  transition: color 0.2s ease;
  margin-bottom: 0.7rem;
`;

const Input = styled.input`
  width: 100%;
  color: #32014a;
  transition: border-bottom 0.2s ease;
  outline: 0;
  padding: 0.3rem 0.7rem;
  border-bottom: 1px solid #aaa;
  margin-bottom: 2.3rem;
  &:placeholder-shown {
    color: #aaa;
  }
  &:not(:placeholder-shown),
  &:focus {
    border-bottom: 1px solid #32014a;
  }
  &:not(:placeholder-shown) ~ label,
  &:focus ~ label {
    color: #32014a;
  }
`;

const Error = styled.span`
  position: absolute;
  font-size: 1.1rem;
  color: #ff0033;
  bottom: .8rem;
`;
