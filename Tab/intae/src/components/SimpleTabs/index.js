import React, { useState } from 'react';

import * as S from './SimpleTabs.styled';

export default function SimpleTabs({ labels, contents }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <S.Wrapper>
      <Tabs
        labels={labels}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
      />
      {contents.map((text, idx) => (
        <TabPannel text={text} show={currentIdx === idx} />
      ))}
    </S.Wrapper>
  );
}

const Tabs = ({ labels, currentIdx, setCurrentIdx }) => {
  return (
    <S.AppBar idx={currentIdx}>
      {labels.map((label, idx) => (
        <S.Tab
          key={label}
          idx={idx}
          selected={currentIdx === idx}
          onClick={() => setCurrentIdx(idx)}
        >
          {label}
        </S.Tab>
      ))}
    </S.AppBar>
  );
};

const TabPannel = ({ text, show }) => {
  if (!show) return null;
  return <S.AppContent>{text}</S.AppContent>;
};
