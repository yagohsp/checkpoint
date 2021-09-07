import React from 'react'
import styled, { css } from "styled-components";

export default function index({ children, removeSide }) {
  return (
    <Filled removeSide={removeSide}>
      {children}
    </Filled>
  )
}

export const Filled = styled.div`
  position: relative;
  background-color: #23012C;
  border: 2px solid #834F95;
  color: #fff;
  ${props => props.removeSide && css`
    border-${props.removeSide}: none;
  `}
`