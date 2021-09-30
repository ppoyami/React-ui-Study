import React from 'react';
import styled from 'styled-components';

export default function InputField({ label, errors = [], children }) {
  // props: label, type, errorMessage,
  return (
    <Field>
      <Label>{label}</Label>
      {children}
      {errors.map((error, idx) => (
        <ErrorText key={idx}>{error}</ErrorText>
      ))}
    </Field>
  );
}

const Field = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textColor};

  & > input {
    width: 100%;
    margin: 0.7rem 0;
    padding: 1.5rem 0.8rem;
    font-size: 1.5rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};

    &:focus {
      border-color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;
const Label = styled.label`
  display: block;
  font-size: 1.8rem;
`;
const ErrorText = styled.pre`
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 1.3rem;
  font-weight: 700;
`;
