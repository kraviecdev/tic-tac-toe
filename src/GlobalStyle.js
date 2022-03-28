import { createGlobalStyle } from "styled-components";
import background from "./tic-tac-toe-bg.png";

export const GlobalStyle = createGlobalStyle`
    #game {
        background: ${({theme}) => theme.colors.background};
        height: 100vh;
        box-sizing: border-box;  
        color: ${({theme}) => theme.colors.fontColor};
        background-image: url("${background}");
        background-size: contain;
        background-position: center;
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