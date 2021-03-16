import { createGlobalStyle } from "styled-components";
import Raleway from "./assets/fonts/Raleway-VariableFont_wght.ttf";

const GlobalStyles = createGlobalStyle`
/* FONTS */
@font-face {
    font-family: 'Raleway';
    src: url(${Raleway});
    font-weight: normal;
    font-style: normal;
  }

/* GENERAL STYLING */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}

/* SCROLLBAR */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: white; 
}
::-webkit-scrollbar-thumb {
  background: #888; 
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

export default GlobalStyles;
