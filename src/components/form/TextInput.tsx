import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput = React.forwardRef(
  ({ label, ...props }: TextInputProps, ref: React.ForwardedRef<any>) => {
    return (
      <TextInputWrapper>
        <Input {...props} />
        {label && <Label>{label}</Label>}
      </TextInputWrapper>
    );
  }
);

export default TextInput;

const TextInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
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
