import styled from 'styled-components';

export const Ul = styled.ul`
  width: 40rem;
  height: 40rem;
  overflow: auto;
  padding: 2rem;
  border: 1px solid #333;
`;
export const Li = styled.li`
  width: 100%;
  text-align: center;
  font-size: 4.5rem;
  padding: 3rem 0;
  border: 1px solid #333;

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 3rem;
  margin-top: 2rem;
`;

export const LoadingMessage = styled.span`
  display: block;
  width: 50%;
  font-size: 2rem;
  text-align: center;
  padding: 2rem;

  margin: 0 auto;
`;

export const ErrorMessage = styled(LoadingMessage)`
  color: tomato;
  font-weight: 700;
`;
