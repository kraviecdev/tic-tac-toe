import { StyledResult, StyledResultButton, StyledResultInner } from "./styled";


const Result = ({ trigger, children, onClick }) => {

   return (trigger) ? (
        <StyledResult>
            <StyledResultInner>
                <StyledResultButton onClick={onClick}>{"Continue"}</StyledResultButton>
                {children}
            </StyledResultInner>
        </StyledResult>
    ) : "";
}

export default Result;