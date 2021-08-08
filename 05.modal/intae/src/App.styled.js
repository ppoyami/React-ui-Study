import styled from 'styled-components';
import { Button } from './components/Modal/Modal.styled';

export const Layout = styled.div`
  width: 100vw;
  height: 300vh;
  ${({ theme }) => theme.align.flexCenter}
`;

export const ModalButton = styled(Button)`
  margin-top: 20rem;
  width: 15rem;
  padding: 2rem 0;
  border-radius: 5px;
  position: static;
  background-color: #eee;
`;
