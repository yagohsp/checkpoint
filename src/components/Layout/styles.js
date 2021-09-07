import styled from "styled-components";

export const Background = styled.div`
  @media screen and (min-width: 998px) {
    min-height: 100vh;
    width: 100%;
    background: #321342;
    /* background: linear-gradient(90deg, rgba(12,11,12,1) 0%, rgba(13,4,17,1) 15%, rgba(80,37,96,1) 50%, rgba(13,4,17,1) 85%, rgba(12,11,12,1) 100%); */
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
