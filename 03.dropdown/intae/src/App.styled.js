import styled from 'styled-components';

export const Layout = styled.div`
  /* Q: body 영역이 10rem 비어있게 된다. */
  margin-top: 10rem;
  ${({ theme }) => theme.align.flexHorizontal}
`;
