import { StyledResult, StyledResultButton, StyledResultInner, StyledResultTitle } from "./styled";

const Result = ({ trigger, children, onClick, title, attribute }) => {

    return (trigger) ? (
        <StyledResult>
            <StyledResultInner>
                <StyledResultTitle attribute={attribute}>
                {title}
                {children}
                </StyledResultTitle> 
                <StyledResultButton onClick={onClick}>{"play again"}</StyledResultButton>
            </StyledResultInner>
        </StyledResult>
    ) : "";
}

export default Result;