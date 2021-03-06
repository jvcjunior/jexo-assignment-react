import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --color-gray: #DDDDDD;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: all 0.3s;
    outline: none;
  }

  body {
    overflow-x: hidden;
  }

  a {
    color: inherit;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
 
export default GlobalStyle;