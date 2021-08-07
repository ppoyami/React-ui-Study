import React from 'react';

import * as S from './List.styled';

import useScrollSpy from '../../hooks/useScrollSpy';
import ScrollSpy from '../ScrollSpy';

export default function List({ posts }) {
  const [containerRef, targetIdx] = useScrollSpy();

  const onClick = id => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <S.Wrapper>
      <ScrollSpy posts={posts} targetIdx={targetIdx} onClick={onClick} />
      <S.Ul ref={containerRef}>
        {posts.map(post => (
          <S.Li key={post.id} id={post.id}>
            <S.Title>{post.title}</S.Title>
            <S.Text>{post.content}</S.Text>
          </S.Li>
        ))}
      </S.Ul>
    </S.Wrapper>
  );
}
