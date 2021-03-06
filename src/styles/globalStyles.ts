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

  h3 {
    font-size: 1.4em;
    font-weight: 500;
  }

  span {
    font-size: 0.875em;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
 
export default GlobalStyle;