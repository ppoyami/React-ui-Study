import styled from 'styled-components';

export const Form = styled.form`
  width: 33rem;
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  border: none;
  padding: 1.5rem 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: 2rem;
  border-radius: 5px;
`;
