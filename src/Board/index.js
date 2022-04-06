import Square from "../Square";
import Result from "../Result";
import { useEffect, useState } from "react";
import { winningPatterns } from "./patterns";
import { StyledBoard } from "./styled";

const Board = () => {

    const [boardStatus, setBoardStatus] = useState(Array(9).fill(null));
    const [disable, setDisable] = useState(Array(9).fill(false));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [result, setResult] = useState("");
    const [draw, setDraw] = useState("");

    const chooseSquare = (selectedBoardIndex) => {

        setBoardStatus(
            boardStatus.map((value, id) => {
                if (id === selectedBoardIndex && value === null) {
                    return currentPlayer;
                }
                return value;
            })
        );

        setDisable(
            disable.map((disabled, id) => {
                if (id === selectedBoardIndex && disabled === false) {
                    return true;
                } return disabled;
            })
        );

        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    };

    useEffect((id) => {
        for (id = 0; id < winningPatterns.length; id++) {
            const [a, b, c] = winningPatterns[id];
            if (boardStatus[a] && boardStatus[a] === boardStatus[b] && boardStatus[a] === boardStatus[c]) {
                setResult(boardStatus[a]);
            }
        }
        return null;
    }, [boardStatus]);

    useEffect(() => {
        const isDraw = (disable) => {
            return disable === true;
        };

        if (disable.every(isDraw)) {
            setDraw("Draw");
        };
    }, [disable]);

    const playAgain = () => {
        setBoardStatus(Array(9).fill(null));
        setDisable(Array(9).fill(false));
        setCurrentPlayer("X")
        setResult("")
        setDraw("")
    };


    return (
        <>
            <StyledBoard>
                <Square
                    disabled={disable[0]}
                    onClick={() => chooseSquare(0)}
                    value={boardStatus[0]}
                />
                <Square
                    disabled={disable[1]}
                    onClick={() => chooseSquare(1)}
                    value={boardStatus[1]}
                />
                <Square
                    disabled={disable[2]}
                    onClick={() => chooseSquare(2)}
                    value={boardStatus[2]}
                />
                <Square
                    disabled={disable[3]}
                    onClick={() => chooseSquare(3)}
                    value={boardStatus[3]}
                />
                <Square
                    disabled={disable[4]}
                    onClick={() => chooseSquare(4)}
                    value={boardStatus[4]}
                />
                <Square
                    disabled={disable[5]}
                    onClick={() => chooseSquare(5)}
                    value={boardStatus[5]}
                />
                <Square
                    disabled={disable[6]}
                    onClick={() => chooseSquare(6)}
                    value={boardStatus[6]}
                />
                <Square
                    disabled={disable[7]}
                    onClick={() => chooseSquare(7)}
                    value={boardStatus[7]}
                />
                <Square
                    disabled={disable[8]}
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