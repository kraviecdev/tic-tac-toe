import styled from "styled-components";

export const StyledBoard = styled.div`
    background-color: black;
    width: 700px;
    height: 700px;
`

export const StyledRow = styled.div`
    &:after {
        clear: both;
        content: "";
        display: table;
    }
`