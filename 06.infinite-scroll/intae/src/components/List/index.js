import React, { useEffect, useState } from 'react';

import * as S from './List.styled';
import fetchData from '../../constants';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [containerRef, isIntersecting] = useInfiniteScroll();

  const asyncFetchData = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchData();
      setData([...data, ...fetchedData]);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      asyncFetchData();
    }
  }, [isIntersecting]);

  return (
    <S.Ul ref={containerRef}>
      {data.map(item => (
        <S.Li key={item.id}>{item.skills}</S.Li>
      ))}
      {loading && <S.LoadingMessage>로딩중입니다.</S.LoadingMessage>}
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Ul>
  );
}
