import { StyledHeader, StyledTitle } from "./styled"

const Header = ({title}) => {

    return (
        <StyledHeader>
            <StyledTitle>
                {title}
            </StyledTitle>
        </StyledHeader>
    );
}

export default Header;