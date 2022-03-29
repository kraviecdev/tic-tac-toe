import Board from './Board';
import Header from './Header';

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import {dark, light} from './theme';


function Game() {

    return (
        <ThemeProvider theme={dark} >
            <GlobalStyle />
            <Header title={"Chuj do dupy"} />
            <Board />
        </ThemeProvider>
    );
}

export default Game;