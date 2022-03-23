import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Board />
    </React.StrictMode>,
    document.getElementById('root')
);
