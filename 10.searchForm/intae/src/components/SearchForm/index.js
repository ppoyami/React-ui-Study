import React from 'react';
import { BsSearch } from 'react-icons/bs';

import * as S from './SearchForm.styled';
import useAsync from '../../hooks/useAsync';
import search from '../../helper';
import useSearch from '../../hooks/useSearch';
import List from './List';

export default function SearchForm() {
  const [{ loading, data, error }, fetchData] = useAsync(search);
  const [value, onChange] = useSearch(fetchData);

  const inputProps = {
    value,
    onChange,
    open: !!data?.length || loading,
    placeholder: '배우고 싶은 지식을 입력해보세요.',
  };

  const listProps = {
    loading,
    data,
    open: !!data?.length || loading,
  };

  return (
    <>
      <S.Title>인프런에서 성장을 도와드려요.</S.Title>
      <S.Form onSubmit={e => e.preventDefault()}>
        <S.Input {...inputProps} />
        <S.Icon>
          <BsSearch />
        </S.Icon>
        <List {...listProps} />
      </S.Form>
    </>
  );
}
