import styled, { css } from 'styled-components';

export const AppBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 10rem;
    border-radius: 2px;
    background-color: red;
    transition: all 0.3s;

    transform: ${({ idx }) => css`translateX(calc(100% * ${idx}))`};
  }
`;
export const AppContent = styled.div`
  height: 10rem;
  ${({ theme }) => theme.align.flexCenter}
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const Tab = styled.div`
  text-align: center;
  font-size: 2.3rem;
  width: 10rem;
  padding: 1rem;
  ${({ selected }) =>
    selected
      ? css`
          color: ${({ theme }) => theme.colors.activeTextColor};
        `
      : css`
          color: ${({ theme }) => theme.colors.disabledTextColor};
        `}
`;

export const Wrapper = styled.div`
  width: 45rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
`;
