import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.span`
  /* Q: Menu 너비 만큼 늘어나는데, inline 처럼 컨텐츠의 크기만 점유할 수 없을까? */
  /* display: flex;
  align-items: center; */
  display: inline-block;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const Menu = styled.ul`
  opacity: 0;
  transform: translateX(2rem);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  display: grid;
  grid-template-columns: max-content;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
    `}
`;

export const Item = styled.li`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.activeTextColor};
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.disabledTextColor};
    color: #fff;
  }

  & > i {
    margin-right: 0.3rem;
  }

  & > small {
    position: absolute;
    right: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.disabledTextColor};
  }
`;

export const Divder = styled.div`
  height: 1px;
  background-color: #333;
`;
