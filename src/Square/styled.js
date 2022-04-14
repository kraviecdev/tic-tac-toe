import styled from 'styled-components';

export const StyledSquare = styled.button`
    cursor: pointer;
    padding: 0px;
    font-size: 75px;
    background: ${({ theme }) => theme.colors.buttonBackgorund};
    border: 2px solid ${({ theme }) => theme.colors.optionBorder};
    transition: 1s;

    &:focus, :hover{
        outline: none;
        filter: brightness(60%);
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.small}px,) {
        font-size: 85px;
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 95px;
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
        font-size: 132px;
    }
`;