import styled, { css, keyframes } from 'styled-components';

const moveleftAndFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%)
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }

`;

export const Snackbar = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid #fff;
  margin-bottom: 1rem;
  border-radius: 5px;

  ${({ variant }) => {
    if (variant === 'fail') {
      return css`
        color: tomato;
        border-color: tomato;
      `;
    } else if (variant === 'success') {
      return css`
        color: greenyellow;
        border-color: greenyellow;
      `;
    }
  }}

  animation-name: ${moveleftAndFadeIn};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
`;
export const Text = styled.span`
  font-size: 2rem;
`;
