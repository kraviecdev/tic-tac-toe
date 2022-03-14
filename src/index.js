import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Game from "./Game";
import { GlobalStyle } from "./GlobalStyle";


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Game
            children={<Board />}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
