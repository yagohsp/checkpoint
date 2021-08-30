import React from 'react'
import styled, { css } from "styled-components";

export default function Filled({ children, removeSide }) {
  return (
    <Content removeSide={removeSide}>
      {children}
    </Content>
  )
}

const Content = styled.div`
  background-color: #23012C;
  border: 1px solid #834F95;
  color: #fff;
  padding: 1.2rem;
  ${props => props.removeSide && css`
    border-${props.removeSide}: none;
  `}
`