import { StyledHeader, StyledTitle } from "./styled"

const Header = ({ children }) => {

    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
}

export default Header;