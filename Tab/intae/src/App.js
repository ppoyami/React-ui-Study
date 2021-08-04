import SimpleTabs from './components/SimpleTabs';

import * as S from './App.styled';
import { MOCK } from './constants/mock';

function App() {
  return (
    <S.AppLayout>
      <SimpleTabs labels={MOCK.labels} contents={MOCK.contents} />
    </S.AppLayout>
  );
}

export default App;
