import React, { useCallback, useEffect, useRef, useState } from 'react';

import { BsFillCaretDownFill } from 'react-icons/bs';

import * as S from './Selection.styled';

function Selection({ placeHolder, options }) {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const selectionRef = useRef(null);
  const tagRef = useRef(null);

  const addItem = useCallback(item => {
    setSelectedItems(prev => {
      if (prev.find(prevItem => prevItem.key === item.key)) return [...prev];
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((key, e) => {
    // M: Tag가 필터링되어 사라지고 난 다음 Header에 전파되기 때문에 dom요소 체크로는 이벤트 버블링을 막을 수 없었음
    e.stopPropagation();
    setSelectedItems(prev => prev.filter(item => item.key !== key));
  }, []);

  useEffect(() => {
    const close = e => {
      if (selectionRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const body = document.querySelector('body');

    body.addEventListener('click', close);
    return () => {
      body.removeEventListener('click', close);
    };
  }, []);

  return (
    <S.Wrapper ref={selectionRef}>
      <S.Header onClick={() => setOpen(prev => !prev)}>
        {selectedItems.length === 0 ? (
          <span>{placeHolder}</span>
        ) : (
          selectedItems.map(item => (
            <S.Tag key={item.key} ref={tagRef}>
              {item.text}
              <i onClick={e => removeItem(item.key, e)}>&times;</i>
            </S.Tag>
          ))
        )}
        <i>
          <BsFillCaretDownFill />
        </i>
      </S.Header>
      <S.Menu open={open}>
        {options?.map(option => (
          <S.Item key={option.key} onClick={() => addItem(option)}>
            {option.text}
          </S.Item>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
}

export default Selection;
