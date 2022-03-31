import styled, { css } from 'styled-components';
import { ReactComponent as ThemeSwitch } from "./theme_icon.svg";

export const Wrapper = styled.div`
    margin: 5px;
    display: flex;
    align-content: center;
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    color: inherit;
    padding: 0px;
`;

export const Info = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  margin: 0px 12px 0px 0px;
  text-transform: uppercase;
`;

export const SwitchBody = styled.span`
  width: 47px;
  padding: 2.5px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid;
  transition: background .3s;

`;

export const IconBody = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: transform .3s, background .3s;
  background: ${({ theme }) => theme.colors.fontColor};
  
  ${({ active }) => active && css`
    transform: translateX(20px);
  `}
`;

export const Icon = styled(ThemeSwitch)`
`;