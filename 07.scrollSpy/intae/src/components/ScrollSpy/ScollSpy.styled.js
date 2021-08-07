import styled, { css } from 'styled-components';

export const List = styled.ul`
  border: 1px solid #eaeaea;
  margin-right: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Item = styled.li`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #eaeaea;
  }

  ${({ isHighlight }) =>
    isHighlight &&
    css`
      background-color: blueviolet;
      color: #fff;
    `}
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
