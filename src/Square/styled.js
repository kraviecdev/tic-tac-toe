import styled from 'styled-components';

export const StyledSquare = styled.button`
    margin: 5px;
    padding: 5px;
    text-align: center;
    width: 164px;
    height: 164px;
    font-size: 132px;
    font-weight: bold;
    transition: 1s;
    border-radius: 50px;
    background: #3186F0;
    box-shadow: inset 20px 20px 60px #2a72cc,
            inset -20px -20px 60px #389aff;

    &:focus{
        outline: none;
        background: #ddd;
    }

    &:hover{
        transform: scale(1.04);
        background: #ddd;
    }
    &:disabled{
        background: #ddd;
        color: black;
    }
`;