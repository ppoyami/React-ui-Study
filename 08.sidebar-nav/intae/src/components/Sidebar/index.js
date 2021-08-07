import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';

import * as S from './Sidebar.styled';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const isBubbling = useRef(false);

  const toggle = () => {
    isBubbling.current = true;
    setOpen(prev => !prev);
  };

  useEffect(() => {
    // M: e.target이 사라져서 버블링을 확인할 수 없을 때 ref 사용
    const body = document.querySelector('body');
    const close = e => {
      // if (buttonRef.current?.contains(e.target)) return;
      // console.log('bubbling', e.target); // ! 아이콘들이 조건부 렌더링으로 사라지기 때문에 위 조건이 false가 된다.
      if (isBubbling.current) {
        isBubbling.current = false;
        return;
      }

      setOpen(false);
    };
    body.addEventListener('click', close);
  }, []);

  return (
    <S.Nav open={open}>
      <i ref={buttonRef} onClick={toggle}>
        {open ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
      </i>
      <S.Ul open={open}>
        <S.Li>
          <a href="#">Home</a>
        </S.Li>
        <S.Li>
          <a href="#">Profile</a>
        </S.Li>
        <S.Li>
          <a href="#">About</a>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
}
