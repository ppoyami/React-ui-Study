import * as S from './App.styled';
import { posts } from './constants';

import List from './components/List';

function App() {
  return (
    <S.Layout>
      <List posts={posts} />
    </S.Layout>
  );
}

export default App;
