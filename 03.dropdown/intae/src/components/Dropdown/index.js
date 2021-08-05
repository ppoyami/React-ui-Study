import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';

import * as S from './Dropdown.styled';

const DropdownContext = createContext(false);

function Dropdown({ text, children }) {
  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    const close = e => {
      if (buttonRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const body = document.querySelector('body');
    body.addEventListener('click', close);
    return () => {
      body.removeEventListener('click', close);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Button ref={buttonRef} onClick={() => setOpen(!open)}>
        <span>{text}</span>
        <i>
          <BsFillCaretDownFill />
        </i>
      </S.Button>
      <DropdownContext.Provider value={open}>
        {children}
      </DropdownContext.Provider>
    </S.Wrapper>
  );
}

const Menu = ({ children }) => {
  const open = useContext(DropdownContext);
  console.log(open);

  return <S.Menu open={open}>{children}</S.Menu>;
};

const Item = ({ icon, text, description }) => {
  return (
    <S.Item>
      {icon && <i>{icon}</i>}
      {text}
      {description && <small>{description}</small>}
    </S.Item>
  );
};

const Divider = () => {
  return <S.Divder></S.Divder>;
};

Dropdown.Menu = Menu;
Dropdown.Item = Item;
Dropdown.Divider = Divider;

export default Dropdown;
