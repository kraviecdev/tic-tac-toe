import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Game from "./Game";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Header />
        <Game
            children={<Board />}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
