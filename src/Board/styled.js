import styled from "styled-components";

export const StyledBoard = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 700px;
    width: 100%;
    max-height: 700px;
    height: 100%;
    padding: 5px;
    background: ${({theme}) => theme.colors.background};
    border-radius: 15px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}) {
        max-width: 375px;
        max-height: 375px;
    }
`;