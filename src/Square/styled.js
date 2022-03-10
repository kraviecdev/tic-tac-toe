import styled from 'styled-components';

export const StyledSquare = styled.button`
    background: #fff;
    border: 1px solid #999;
    padding: 5px;
    min-width: 164px;
    min-height: 164px;
    text-align: center;
    font-weight: bold;
    font-size: 130px;
    transition: 1s;

    &:focus{
        background: #ddd;
    }
    &:hover{
        transform: scale(1.04);
        background: #ddd;
    }
`