import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

export const StyledHeader = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StyledTitle = styled.h1`
    text-align: center;
    flex-grow: 1;
    font-size: 50px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`

export const StyledSwichLabel = styled.label`
    cursor: pointer;
`

export const StyledSwitch = styled.span`
    display: block;
    width: 76px;
    padding: 4px;
    border-radius: 20px;
    background: #414048;
    transition: all 0.35s;
`
const switchOn = keyframes`
    45% {
        transform: scaleX(1.25);
    }
`
const switchOFF = keyframes`
    55% {
        transform: scaleX(1.25);
    }
`
const switchOnAnimation = css`
    animation: ${switchOn} 0.35s;
`
const switchOffAnimation = css`
    animation: ${switchOFF} 0.35s;
`

export const StyledSwichDot = styled.span`
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #1d1d1d;

    ${p =>
        !p.isChecked
            && switchOffAnimation};

    transition: all 0.35s;
`
export const StyledSwitchInput = styled.input`
    transform: scale(0);

    &:checked ~ ${StyledSwitch} {
        background: #1ac0a2;
    }

    &:checked ~ ${StyledSwitch} ${StyledSwichDot} {
        margin-left: 36px;

        ${p =>
            p.checked
                && switchOnAnimation};
    }
`
