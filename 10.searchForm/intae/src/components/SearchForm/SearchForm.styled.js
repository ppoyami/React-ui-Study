import styled, { css } from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
`;
export const Form = styled.form`
  position: relative;
  min-width: 40rem;
  width: 40vw;
`;
export const Input = styled.input`
  width: 100%;
  padding: 2rem 2.5rem;
  background-color: #e3f8ef;

  outline: none;
  border: 1px solid #59cf93;
  border-radius: 30px;
  ${({ open }) =>
    open &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  transition: all .3s;

  font-size: 2.5rem;

  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  &::placeholder {
    font-family: 'Noto Serif KR', serif;
    font-size: 2rem;
    color: #aeaeae;
  }

  &:focus {
    border: 1px solid #aeaeae;
    background-color: #fff;
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: 5%;
  top: 2rem;
  font-size: 3rem;
  color: #aeaeae;
`;
