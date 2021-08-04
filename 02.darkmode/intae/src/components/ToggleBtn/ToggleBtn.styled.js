import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  width: 7rem;
  height: 3.5rem;
  display: inline-block;
`;
export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2196f3;
  }
  &:checked + span::after {
    transform: translateX(3.5rem);
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
`;
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 5rem;

  &::after {
    position: absolute;
    left: 4px;
    top: 4px;
    content: '';
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: white;
    transition: all 0.4s;
  }
`;
