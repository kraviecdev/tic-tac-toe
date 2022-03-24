import styled from "styled-components";

export const StyledBoard = styled.main`
    max-width: 700px;
    width: 100%;
    max-height: 700px;
    height: 100%;
    padding: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}) {
        max-width: 375px;
        max-height: 375px;
    }
`;

export const StyledRow = styled.section`
        display: flex;
        height: 33%;
        margin: 5px;
`;