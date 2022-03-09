import { useState } from "react";
import { StyledSquare } from "./styled";


const Square = () => {
    
    const [value, setValue] = useState("");


    return (
        <StyledSquare onClick={() => setValue(value === "X" ? "" : "X")}>
            {value}
        </StyledSquare>
    );
}
export default Square;