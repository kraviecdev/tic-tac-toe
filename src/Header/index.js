import { useState } from "react";
import { StyledHeader, StyledSwichDot, StyledSwichLabel, StyledSwitch, StyledSwitchInput, StyledTitle } from "./styled"

const ThemeChange = () => {
    const [isChecked, setChecked] = useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <StyledSwichLabel>
            <StyledSwitchInput
                as="checkbox"
                onChange={handleChange}
                checked={isChecked}
            />
            <StyledSwitch>
                <StyledSwichDot
                    isChecked={isChecked}
                />
            </StyledSwitch>
        </StyledSwichLabel>
    );
}


const Header = () => {

    return (
        <StyledHeader>
            <StyledTitle>
                {"Tic Tac Toe"}
            </StyledTitle>
            <ThemeChange />
        </StyledHeader>
    );
}

export default Header;