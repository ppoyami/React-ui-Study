import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  ${({ theme }) => theme.align.flexCenter}
  flex-direction: column;
  background-color: ${({ theme }) => theme.mode.bgColor};
`;

export const Text = styled.h1`
  margin-top: 3rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.mode.textColor};
`;
