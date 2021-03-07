import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  h3 {
    font-size: 1.4em;
    font-weight: 500;
  }

  span {
    font-size: 0.875em;
    font-weight: 400;
    // line-height: 0px;
  }

  button {
    cursor: pointer;
  }
`;
 
export default GlobalStyle;