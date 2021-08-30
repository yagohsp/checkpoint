import styled, { css, keyframes } from "styled-components";

export default function Button({ children, error, isLoading, ...props }) {
  return (
    <StyledButton disabled={error} error={error} {...props}>
      {error || isLoading ? (
        <>
          {children}<LoadingIcon />
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  background-color: #a700fa;
  transition: background-color 0.2s ease;
  border-radius: 1rem;
  padding: 1rem 0.8rem;
  margin-top: 1rem;
  &:hover {
    background-color: #8100c2;
  }
  ${(props) =>
    props.error &&
    css`
      background-color: #ff0033;
      cursor: default;
      pointer-events: none;
    `}
`;

const spinAnimation = keyframes`
from {
    transform: rotate(0turn);
}

to {
    transform: rotate(1turn);
}
`;

export const LoadingIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  left: 2.5rem;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  border-left-color: rgba(0, 0, 0, 0.3);
  border-right-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  margin-left: -1.5rem;
`;
