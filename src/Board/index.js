import { useState } from "react";
import Square from "../Square";
import { Patterns } from "./patterns";
import { StyledBoard, StyledRow } from "./styled";

const Board = () => {

    const [boardStatus, setBoardStatus] = useState(Array(9).fill(""));
    const [player, setPlayer] = useState("X")

    const chooseSquare = (i) => {
        setBoardStatus(
            boardStatus.map((value, id) => {
                if (id === i && value === "") {
                    return player;
                }
                return value;
            })
        );
        if (player === "X") {
            setPlayer("O")
        } else {
            setPlayer("X")
        }
    };

    const calculateWinner = () => {
        for (let i = 0; i < Patterns.length; i++) {
            const [a, b, c] = Patterns[i];
            if (boardStatus[a] && boardStatus[a] === boardStatus[b] && boardStatus[a] === boardStatus[c]) {
                return console.log(boardStatus[a]);
            }
        }
        return null;
    }

    return (
        <StyledBoard>
            <StyledRow>
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
            </StyledRow>
            <StyledRow>
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
            </StyledRow>
            <StyledRow>
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
            </StyledRow>
        </StyledBoard>
    );
}

export default Board;