import React from "react";
import styled from "styled-components";

const ErrorLabel = React.forwardRef(
  ({ error }, ref) => {
    return error ? <Error>{error}</Error> : <></>;
  }
);

export default ErrorLabel;

const Error = styled.span`
  font-size: 1.1rem;
  color: #ff0033;
  bottom: .8rem;
`;
