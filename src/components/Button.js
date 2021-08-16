import React from 'react';
import styled from 'styled-components';

export default function Button({children, ...props}) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem .8rem;
  background-color: #a700fa;
  color: #fff;
  font-weight: bold;
  border-radius: 1rem;
  margin-top: 1rem;
  transition: background-color .2s ease;
  &:hover{
    background-color: #8100c2;
  }
`;
