import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Game from "./Game";


ReactDOM.render(
    <Game children={
        <Board />
    } />,
    document.getElementById('root')
);
