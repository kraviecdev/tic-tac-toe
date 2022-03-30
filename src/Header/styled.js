import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.colors.popupBg};
    margin-bottom: 15px;
`;

export const StyledTitle = styled.h1`
    text-align: center;
    flex-grow: 1;
    font-size: 50px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`;