import styled from 'styled-components';

export const StyledSquare = styled.button`
    cursor: pointer;
    width: 100%;
    font-size: 75px;
    background: ${({theme}) => theme.colors.buttonBackgorund};
    border: 2px solid ${({theme}) => theme.colors.optionBorder};
    transition: 1s;

    &:focus, :hover{
        outline: none;
        filter: brightness(60%);
    }

    &:disabled{
        color: ${({theme}) => theme.colors.fontColor};
        filter: brightness(85%)
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