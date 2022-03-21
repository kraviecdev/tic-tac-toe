import Square from "../Square";
import Result from "../Result";
import { useEffect, useState } from "react";
import { Patterns } from "./patterns";
import { StyledBoard, StyledRow } from "./styled";

const Board = () => {

    const [boardStatus, setBoardStatus] = useState(Array(9).fill(null));
    const [disable, setDisable] = useState(Array(9).fill(false));
    const [player, setPlayer] = useState("X");
    const [result, setResult] = useState("");
    const [draw, setDraw] = useState("");

    const chooseSquare = (i) => {

        setBoardStatus(
            boardStatus.map((value, id) => {
                if (id === i && value === null) {
                    return player;
                }
                return value;
            })
        );

        setDisable(
            disable.map((disabled, id) => {
                if (id === i && disabled === false) {
                    return true;
                } return disabled;
            })
        );

        if (player === "X") {
            setPlayer("O")
        } else {
            setPlayer("X")
        };
    };

    useEffect((id) => {
        for (id = 0; id < Patterns.length; id++) {
            const [a, b, c] = Patterns[id];
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
        setPlayer("X")
        setResult("")
        setDraw("")
    };


    return (
        <>
            <StyledBoard>
                <StyledRow>
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
                </StyledRow>
                <StyledRow>
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
                </StyledRow>
                <StyledRow>
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
                </StyledRow>
            </StyledBoard>
            <Result trigger={result} onClick={() => playAgain()} >
                <h1>Wielki Zwycięzca</h1>
                <h3>{result}</h3>
            </Result>
            <Result trigger={draw} onClick={() => playAgain()}>
                <h1>It is a {draw}</h1>
            </Result>
        </>
    );
};

export default Board;