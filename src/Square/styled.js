import styled from 'styled-components';

export const StyledSquare = styled.button`
    cursor: pointer;
    width: 33%;
    height: fill;
    margin: 0 5px;
    font-size: 132px;
    font-weight: bold;
    transition: 1s;
    border-radius: 15px;
    background: ${({theme}) => theme.colors.buttonBackgorund};
    box-shadow:  1px 1px 10px ${({theme}) => theme.colors.shadowOne},
                -1px -1px 10px ${({theme}) => theme.colors.shadowTwo};   

    &:focus, :hover{
        outline: none;
        box-shadow: none;
    }

    &:disabled{
        box-shadow: inset 5px 5px 10px ${({theme}) => theme.colors.shadowOne},
                    inset -5px -5px 10px ${({theme}) => theme.colors.shadowTwo};
        color: ${({theme}) => theme.colors.fontColor};
    }
`;