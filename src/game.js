import Board from './Board';
import Header from './Header';

import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import { dark, light } from './theme';
import { ThemeSwitch } from './ThemeSwitch';


function Game() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

    const isDarkTheme = () => {
        if (theme === 'dark') {
            return true;
        } return false;
    };

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark} >
            <GlobalStyle />
            <Header children={
                <ThemeSwitch
                    onClick={() => toggleTheme()}
                    status={theme === 'light' ? "on" : "off"}
                    active={isDarkTheme()}
                />
            } />
            <Board />
        </ThemeProvider>
    );
}

export default Game;