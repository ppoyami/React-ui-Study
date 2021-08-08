import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  ${({ theme }) => theme.align.flexCenter}
  flex-direction: column;
`;

export const TextButton = styled.span`
  font-weight: 700;
  border: 2px solid #eee;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  cursor: pointer;

  &:first-child {
    color: tomato;
    border-color: tomato;
  }
  &:last-child {
    color: greenyellow;
    border-color: greenyellow;
  }

  &:first-child:hover {
    background-color: tomato;
  }

  &:last-child:hover {
    background-color: greenyellow;
  }

  &:hover {
    color: #333;
  }
  font-size: 3rem;
`;
