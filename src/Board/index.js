import Square from "../Square";
import Result from "../Result";
import { useEffect, useState } from "react";
import { winningPatterns } from "./patterns";
import { StyledBoard } from "./styled";

const Board = () => {

    const initialState = "";

    const [boardStatus, setBoardStatus] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [result, setResult] = useState(initialState);
    const [draw, setDraw] = useState(initialState);

    const chooseSquare = (selectedBoardIndex) => {

        if (boardStatus[selectedBoardIndex]) {
            return;
        };

        setBoardStatus(
            boardStatus.map((value, id) => {
                if (id === selectedBoardIndex && value === null) {
                    return currentPlayer;
                }
                return value;
            })
        );

        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    };

    useEffect(() => {
        for (const winningPattern of winningPatterns) {
            const [a, b, c] = winningPattern;
            if (boardStatus[a] && boardStatus[a] === boardStatus[b] && boardStatus[a] === boardStatus[c]) {
                setResult(boardStatus[a]);
            }
        }
    }, [boardStatus]);



    const playAgain = () => {
        setBoardStatus(Array(9).fill(null));
        setCurrentPlayer("X")
        setResult(initialState)
        setDraw(initialState)
    };


    return (
        <>
            <StyledBoard>
                <Square
                    onClick={() => chooseSquare(0)}
                    value={boardStatus[0]}
                />
                <Square
                    onClick={() => chooseSquare(1)}
                    value={boardStatus[1]}
                />
                <Square
                    onClick={() => chooseSquare(2)}
                    value={boardStatus[2]}
                />
                <Square
                    onClick={() => chooseSquare(3)}
                    value={boardStatus[3]}
                />
                <Square
                    onClick={() => chooseSquare(4)}
                    value={boardStatus[4]}
                />
                <Square
                    onClick={() => chooseSquare(5)}
                    value={boardStatus[5]}
                />
                <Square
                    onClick={() => chooseSquare(6)}
                    value={boardStatus[6]}
                />
                <Square
                    onClick={() => chooseSquare(7)}
                    value={boardStatus[7]}
                />
                <Square
                    onClick={() => chooseSquare(8)}
                    value={boardStatus[8]}
                />
            </StyledBoard>
            <Result
                trigger={result}
                onClick={playAgain}
                title={"The winner: "}
            >
                {result}
            </Result>
            <Result
                trigger={draw}
                onClick={playAgain}
                title={"It is a "}
            >
                {draw}
            </Result>
        </>
    );
};

export default Board;