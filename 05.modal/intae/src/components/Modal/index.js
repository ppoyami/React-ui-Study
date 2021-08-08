import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import Portal from '../hoc/Portal';
import * as S from './Modal.styled';

const onCloseContext = createContext(null);

function Modal({ children, visible, setVisible }) {
  const [animation, setAnimation] = useState(false);
  const [lazy, setLazy] = useState(false);
  const onClose = () => setVisible(false);

  const firstMount = useRef(true);

  const onMaskClose = e => {
    if (e.target !== e.currentTarget) return;
    setVisible(false);
  };

  useEffect(() => {
    if (!visible && lazy) {
      console.log('언마운트 지연');
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
        console.log('애니메이션 완료');
      }, 500);
    }
    setLazy(visible);
  }, [visible, lazy]);

  useEffect(() => {
    // ! dep 변경 => Re-rendring => cleanup() => effect()
    // ? 첫 마운팅이 아니고, 보여질 때(), 좌표 고정
    if (!firstMount.current && visible) {
      console.log('visible -> 좌표 고정', window.scrollY);
      document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    }

    // ? 처음 마운트가 아니고(), null 로 렌더링 될 때(!lazy && !animation), 스크롤을 원래대로
    if (!firstMount.current && !lazy && !animation) {
      console.log('언마운트 -> 좌표 원래대로', document.body.style.top);
      const scrollY = (parseInt(document.body.style.top) || 0) * -1;
      document.body.style.cssText = `position: ''; top: ''`;
      window.scrollTo(0, scrollY);
    }
    firstMount.current = false;
  }, [visible, lazy, animation]);

  if (!lazy && !animation) return null;

  return (
    <Portal elementId="modal-root">
      <S.Overlay visible={visible} animation={animation} onClick={onMaskClose}>
        <S.Wrapper tabIndex="-1" visible={visible} animaion={animation}>
          <S.Inner tabIndex="0">
            <onCloseContext.Provider value={onClose}>
              {children}
            </onCloseContext.Provider>
          </S.Inner>
        </S.Wrapper>
      </S.Overlay>
    </Portal>
  );
}

const Image = props => {
  const { src, className } = props;
  return <S.Image {...{ src, className }} />;
};

const Button = props => {
  const { children, className } = props;
  const onClose = useContext(onCloseContext);
  return (
    <S.Button {...{ className }} onClick={onClose}>
      {children}
    </S.Button>
  );
};

Modal.Image = Image;
Modal.Button = Button;

export default Modal;
