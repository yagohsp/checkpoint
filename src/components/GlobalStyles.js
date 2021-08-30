import { createGlobalStyle, css } from 'styled-components';
import '../assets/fonts/fonts.css'

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-flex-negative: 1;

    @media screen and (max-width: 997px) {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -moz-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button,
  input,
  select,
  textarea {
    padding: 0;
  }

  hr,
  img {
    border: none;
  }

  label {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input:invalid,
  textarea:invalid {
    box-shadow: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:active,
  a,
  select {
    cursor: pointer;
  }

  input,
  select,
  textarea {
    appearance: none;
    font: inherit;
    border-radius: 0;
    &::placeholder {
      color: inherit;
      opacity: 1;
    }
  }

  button,
  input,
  select,
  textarea,
  optgroup {
    background: transparent;
    border: none;
    font: inherit;
    color: inherit;
  }
  textarea {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    resize: none;
  }

  select::-ms-expand {
    display: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  img,
  main,
  menu,
  nav,
  section,
  summary,
  svg {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  caption,
  th,
  td {
    text-align: left;
    font-weight: normal;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  b,
  strong {
    font-weight: 700;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #000 !important;
    transition: background-color 50000s ease-in-out 0s;
    font: inherit;
  }
`;

const config = css`
  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  .enabled {
    opacity: 1;
    pointer-events: pointer;
  }
  .desktop {
    @media screen and (max-width: 997px) {
      display: none !important;
    }
  }
  .mobile {
    @media screen and (min-width: 998px) {
      display: none !important;
    }
  }
`;

export default createGlobalStyle`
  ${reset}
  
  ${config}


  html {
    font-family: "Roboto", sans-serif;
    font-size: 62.5%;
    body{
      font-size: 1.6rem;
      @media screen and (max-width: 1680px){
        font-size: 1.5rem;
      }
      @media screen and (max-width: 1440px){
        font-size: 1.3rem;
      }
      @media screen and (max-width: 1280px){
        font-size: 1.2rem;
      }
      @media screen and (max-width: 1024px){
        font-size: 1.1rem;
      }
      @media screen and (max-width: 997px){
        font-size: 1.6rem;
      }
    }
  }
`;
