import { StyledGame } from "./styled";
import Header from "../Header";


const Game = ({ children }) => {
    return (
        <>
            <Header />
                <StyledGame>
                    {children}
                </StyledGame>
            
        </>
    );
}

export default Game;