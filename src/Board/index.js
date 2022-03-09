import Square from "../Square";
import { StyledBoard, StyledRow } from "./styled";

const Board = () => {
    const renderSquare = (i) => {
        return <Square />;
    };

    return (
        <StyledBoard>
            <StyledRow>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </StyledRow>
            <StyledRow>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </StyledRow>
            <StyledRow>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </StyledRow>
        </StyledBoard>
    );
}

export default Board;