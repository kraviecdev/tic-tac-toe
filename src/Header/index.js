import { StyledHeader, StyledTitle } from "./styled"

const Header = ({ children }) => {

    return (
        <StyledHeader>
            <StyledTitle>{"Tic Tac Toe"}</StyledTitle>
            {children}
        </StyledHeader>
    );
}

export default Header;