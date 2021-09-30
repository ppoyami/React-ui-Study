import styled from '@emotion/styled';

const App = () => {
  return (
    <div>
      <Nav>App</Nav>
    </div>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.primary};
  filter: brightness(1.2);
`;

export default App;
