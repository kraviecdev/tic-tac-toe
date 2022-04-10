import Board from './Board';
import Header from './Header';

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import { dark, light } from './theme';
import { ThemeSwitch } from './ThemeSwitch';
import { useTheme } from "./ThemeSwitch/useTheme";

function Game() {

    const {
        theme,
        toggleTheme,
        isDarkTheme
    } = useTheme();

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark} >
            <GlobalStyle />
            <Header>
                <ThemeSwitch
                    onClick={toggleTheme}
                    status={theme === 'light' ? "on" : "off"}
                    active={isDarkTheme()}
                />
            </Header>
            <Board />
        </ThemeProvider>
    );
}

export default Game;