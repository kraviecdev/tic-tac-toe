import { createGlobalStyle } from "styled-components";
import background from "./ticTacToeBackground.svg";

export const GlobalStyle = createGlobalStyle`
    #game {
        height: 100vh; 
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
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.fontColor};
        box-sizing: border-box; 
        margin: 0;
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;