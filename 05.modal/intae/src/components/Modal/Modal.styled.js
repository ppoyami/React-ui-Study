import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  animation-name: ${fadeIn};
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  ${({ animation }) =>
    animation &&
    css`
      animation-name: ${fadeOut};
    `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.align.positionCenter}
  border-radius: 3px;
  overflow: hidden;

  animation-name: ${fadeIn};
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  ${({ animation }) =>
    animation &&
    css`
    animation-nam${fadeOut}
  `}
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: #fff;
  width: 20rem;
  height: 30rem;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  background-color: #89beb3;
  width: 100%;
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-transform: uppercase;
  &:hover {
    filter: brightness(0.8);
  }
`;
