import Sidebar from './components/Sidebar';
import * as S from './App.styled';

function App() {
  return (
    <S.Layout>
      <Sidebar />
      <h1
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#333',
          color: '#eaeaea',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'margin-left 0.3s',
          fontSize: '4rem',
        }}
      >
        헬로 월드!
      </h1>
    </S.Layout>
  );
}

export default App;
