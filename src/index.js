import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Footer from "./Footer";
import Game from "./Game";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Header title={"Tic Tac Toe"} />
        <Game
            children={<Board />}
        />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
