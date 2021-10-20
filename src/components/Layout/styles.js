import styled from "styled-components";

export const Background = styled.div`
  @media screen and (min-width: 998px) {
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(90deg, rgba(12,11,12,1) 0%, #1d0829 15%, #321342 50%, #1d0829 85%, rgba(12,11,12,1) 100%);
  }
  @media screen and (max-width: 997px) {
    background: #321342;
  }
`

export const Grid = styled.div`
  width: 100%;
  @media screen and (min-width: 998px) {
    position: relative;
    max-width: 1360px;
    display: flex;
    padding: 0 40px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 998px) {
    border: 2px solid #834F95;
    margin-top: 3rem;
  }
  @media screen and (max-width: 997px) {
    padding-bottom: 50px;
  }
`;