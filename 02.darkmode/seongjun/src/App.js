import './App.css';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 4em;
  background: papayawhip;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
}

export default App;
