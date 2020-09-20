import { createGlobalStyle } from 'styled-components';
import githubBackgroud from '../assets/githubBackground.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #e5e5e5 url(${githubBackgroud}) no-repeat 65% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 20px Roboto, sans-serif;
    letter-spacing: 3px;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
