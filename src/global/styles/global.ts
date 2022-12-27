import { createGlobalStyle } from "styled-components";
import { theme } from "./themes";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Merriweather Sans', sans-serif;
  };
  
  body {
    background-color: ${theme.colors.bgColor};
    color: ${theme.colors.textColor};
  }
`
