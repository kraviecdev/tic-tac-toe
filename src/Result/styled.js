import styled from "styled-components";

export const StyledResult = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.popupBg};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledResultInner = styled.section`
    display: inherit;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.optionBorder}
`;

export const StyledResultButton = styled.button`
    text-transform: uppercase;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    transition-duration: 1s;
    background: ${({ theme }) => theme.colors.buttonBackgorund};  
    color: ${({ theme }) => theme.colors.fontColor};

    &:focus, :hover{
        outline: none;
        filter: brightness(70%);
    }
`;

export const StyledResultTitle = styled.h1`
    font-size: 46px;
    text-align: center;
    margin: 16px;
    overflow: hidden;
    white-space: nowrap;
    animation: 
        typing 2s steps(35, end);

    @keyframes typing {
        from {
            width: 0%;
            }
        to {
            width: 100%;
            }
        }

`;
