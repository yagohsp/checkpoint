import React from "react";
import styled, { css } from "styled-components";

export default function index({
  children,
  removeSide,
  borderColor,
}) {
  console.log(borderColor)
  return (
    <Filled removeSide={removeSide} borderColor={borderColor}>
      {children}
    </Filled>
  );
}

export const Filled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #23012c;
  color: #fff;
  transition: border .15s ease;
  ${({ borderColor }) =>
    css`
      border: 2px solid ${borderColor || "#834F95"};
    `}
  ${({ removeSide }) =>
    removeSide &&
    css`
    border-${removeSide}: none;
  `}
`;
