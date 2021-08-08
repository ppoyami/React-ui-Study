import * as S from './App.styled';

import useSnackbar from './hooks/useSnackbar';

function App() {
  const [queue, enqueueSnackbar] = useSnackbar();

  return (
    <S.Layout>
      <S.TextButton onClick={() => enqueueSnackbar('실패하였습니다.', 'fail')}>
        실패하기
      </S.TextButton>
      <S.TextButton
        onClick={() => enqueueSnackbar('성공하였습니다.', 'success')}
      >
        성공하기
      </S.TextButton>
      {queue}
    </S.Layout>
  );
}

export default App;
