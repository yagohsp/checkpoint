import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  position: sticky;
  top: 3rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  overflow: hidden;
  @media screen and (min-width: 998px) {
    max-width: 33rem;
  }
`;
