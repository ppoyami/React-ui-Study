import React from 'react';

import * as S from './ScollSpy.styled';

export default function ScollSpy({ posts, targetIdx, onClick }) {
  return (
    <S.List>
      {posts.map(post => (
        <S.Item
          key={post.id}
          isHighlight={post.id === targetIdx}
          onClick={() => onClick(post.id)}
        >
          <S.Title>{post.title}</S.Title>
        </S.Item>
      ))}
    </S.List>
  );
}
