import { createGlobalStyle } from "styled-components";
import background from "./tic-tac-toe-bg-dark.png";

export const GlobalStyle = createGlobalStyle`
    #root {
        height: 100vh;
        box-sizing: border-box;  
        color: #ffffff;
        background: url("${background}");
        background-size: contain;
        background-position: top;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;