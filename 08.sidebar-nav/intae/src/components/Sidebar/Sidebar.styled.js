import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  text-align: center;

  & > i {
    display: inline-block;
    width: 100%;
    padding-top: 2rem;
    font-size: 3rem;
    font-weight: 700;
    cursor: pointer;
  }

  position: fixed;
  left: 0;
  width: 10rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: #fff;
  transition: width 0.3s;

  ${({ open }) =>
    open &&
    css`
      width: 30rem;
      & + * {
        margin-left: 30rem;
      }
    `}
`;
export const Ul = styled.ul`
  padding-top: 5rem;
  transform: translateX(-100%);

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}
`;
export const Li = styled.li`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    font-size: 3rem;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;
