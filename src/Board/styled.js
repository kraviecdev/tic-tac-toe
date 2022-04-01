import styled from "styled-components";

export const StyledBoard = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 375px;
    max-height: 375px;
    width: 100%;
    height: 100%;
    padding: 5px;
    background: ${({theme}) => theme.colors.background};
    border-radius: 15px;

    @media(min-width: ${({ theme }) => theme.breakpoints.small}px) and (min-height: ${({ theme }) => theme.breakpoints.small}px) {
        max-width: 475px;
        max-height: 475px;
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.medium}px) and (min-height: ${({ theme }) => theme.breakpoints.medium}px){
        max-width: 625px;
        max-height: 625px;
    }

    @media(min-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
        max-width: 700px;
        max-height: 700px;
    }
`;