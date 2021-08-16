import React from 'react';
import styled from 'styled-components';

export default function TextInput({label = undefined, ...props}) {
  return (
    <TextInputWrapper>
      <Input {...props} />
      {label && <Label>{label}</Label> }
    </TextInputWrapper>
  )
}

const TextInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const Label = styled.label`
  width: 100%;
  color: #8b5ba3;
  transition: color .2s ease;
  margin-bottom: .7rem;
`;

const Input = styled.input`
  width: 100%;
  color: #32014a;
  transition: border-bottom .2s ease;
  outline: 0;
  padding: .3rem .7rem;
  border-bottom: 1px solid #aaa;
  margin-bottom: 2.3rem;
  &:placeholder-shown{
    color: #aaa;
  }
  &:not(:placeholder-shown), &:focus{
    border-bottom: 1px solid #32014a;
  }
  &:not(:placeholder-shown) ~ label, &:focus ~ label{
    color: #32014a;
  }
`;