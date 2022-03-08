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
                {renderSquare(9)}
                {renderSquare(9)}
                {renderSquare(9)}
            </StyledRow>
            <StyledRow>
                {renderSquare(9)}
                {renderSquare(9)}
                {renderSquare(9)}
            </StyledRow>
        </StyledBoard>
    );
}

export default Board;