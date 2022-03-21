import { StyledGame } from "./styled";


const Game = ({ children }) => {
    return (
        <StyledGame>
            {children}
        </StyledGame>
    );
}

export default Game;