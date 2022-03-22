import { createGlobalStyle } from "styled-components";
import background from "./tic-tac-toe-bg-dark.png";

export const GlobalStyle = createGlobalStyle`
    html {
        background-color: black;
    }
    #root {
        height: 98vh;
        box-sizing: border-box;  
        color: #424656;
        background: url("${background}");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;