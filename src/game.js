import Board from './Board';
import Header from './Header';

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import {dark, light} from './theme';
import { ThemeSwitch } from './ThemeSwitch';


function Game() {

    return (
        <ThemeProvider theme={light} >
            <GlobalStyle />
            <Header children={<ThemeSwitch />}/>
            <Board />
        </ThemeProvider>
    );
}

export default Game;