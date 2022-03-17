import styled from "styled-components";

export const StyledResult = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledResultInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: white;
`;

export const StyledResultButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;