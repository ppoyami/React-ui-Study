import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 30rem;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #666;
  padding: 0.3rem 1rem;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem;

  & > i {
    position: absolute;
    right: 3px;
  }
`;

export const Tag = styled.span`
  background-color: #333;
  color: #fff;
  padding: 0.2rem;
  border-radius: 3px;
  margin-right: 0.3rem;
  margin-bottom: 0.2rem;
`;

export const Menu = styled.ul`
  border: 1px solid #eee;
  display: none;
  ${({ open }) =>
    open &&
    css`
      display: block;
    `}
`;

export const Item = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
`;
