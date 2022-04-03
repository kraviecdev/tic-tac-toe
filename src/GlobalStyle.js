import { createGlobalStyle } from "styled-components";
import background from "./tic-tac-toe-bg.svg";

export const GlobalStyle = createGlobalStyle`
    #game {
        background: ${({theme}) => theme.colors.background};
        height: 100vh;
        box-sizing: border-box;  
        color: ${({theme}) => theme.colors.fontColor};
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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