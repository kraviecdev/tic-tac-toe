import { StyledSquare } from "./styled";

const Square = ({ value, onClick }) => {

    return (
        <StyledSquare
            onClick={onClick}
        >
            {value}
        </StyledSquare>

    );
}
export default Square;