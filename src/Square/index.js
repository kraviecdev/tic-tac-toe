import { StyledSquare } from "./styled";


const Square = ({ value, onClick, disabled }) => {

    return (
        <StyledSquare
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </StyledSquare>

    );
}
export default Square;