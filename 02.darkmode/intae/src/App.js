import * as S from './App.styled';
import ToggleBtn from './components/ToggleBtn';
import { useTheme } from './context';

function App() {
  const { mode } = useTheme();
  return (
    <S.Layout>
      <ToggleBtn />
      <S.Text>안녕하세요. {mode + 'mode'} 입니다.</S.Text>
    </S.Layout>
  );
}

export default App;
