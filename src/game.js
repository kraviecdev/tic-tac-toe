import Board from './Board';

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import {dark} from './theme';


function Game() {

    return (
        <ThemeProvider theme={dark} >
            <GlobalStyle />
            <Board />
        </ThemeProvider>
    );
}

export default Game;