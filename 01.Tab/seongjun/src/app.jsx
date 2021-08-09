import './app.css';
import React, { useState } from 'react';

import Content from './components/content';
import Tab from './components/tab';

function App() {
  const contents = [
    {
      title: 'Content 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices sem est, et faucibus ex convallis id. Donec sit amet vulputate urna, nec semper lectus. Donec ut consectetur quam. Nunc cursus, magna nec semper suscipit, nisl elit pulvinar leo',
    },
    {
      title: 'Content 2',
      content:
        'Nullam risus mauris, aliquam sit amet laoreet non, aliquet sodales sapien. Proin id urna facilisis, consectetur tortor eu, placerat nibh. Donec commodo posuere lectus, nec laoreet massa commodo eu.',
    },
    {
      title: 'Content 3',
      content:
        'Mauris euismod lorem lacus, faucibus malesuada leo gravida sed. Fusce sollicitudin vitae est at tincidunt. Nullam vel rhoncus lorem, vel gravida elit. Nullam non enim dui.',
    },
  ];

  // 선택된 content 상태
  const [curContentIdx, setCurContentIdx] = useState(0);

  return (
    <>
      <Tab contents={contents} setCurContentIdx={setCurContentIdx} />
      <Content content={contents[curContentIdx]} />
    </>
  );
}

export default App;
