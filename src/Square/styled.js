import styled from 'styled-components';

export const StyledSquare = styled.button`
    margin: 3px;
    width: 224px;
    height: 224px;
    font-size: 132px;
    font-weight: bold;
    color: #ffffff;
    transition: 1s;
    border-radius: 15px;
    background: #606060;
    box-shadow:  1px 1px 10px #414141,
                -1px -1px 10px #7f7f7f;   

    &:focus, :hover{
        outline: none;
        box-shadow: none;
    }

    &:disabled{
        background: #606060;
        box-shadow: inset 5px 5px 10px #414141,
                    inset -5px -5px 10px #7f7f7f;
        color: #ffffff;
    }
`;