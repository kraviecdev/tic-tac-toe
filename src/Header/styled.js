import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.popupBackground};
    position: absolute;
    top: 0;
    justify-content: flex-end;

    @media(max-height: ${({ theme }) => theme.breakpoints.small}px) and (max-height: ${({ theme }) => theme.breakpoints.medium}px){
        position: inherit;
  }
`;