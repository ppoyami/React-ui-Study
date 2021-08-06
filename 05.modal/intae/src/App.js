import * as S from './App.styled';

import Modal from './components/Modal';

import donate from './static/image/donate.svg';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  const modalProps = {
    visible,
    setVisible,
  };

  return (
    <S.Layout>
      <Modal {...modalProps}>
        <Modal.Image src={donate} />
        <Modal.Button>donate</Modal.Button>
      </Modal>
      <S.ModalButton onClick={() => setVisible(true)}>click!</S.ModalButton>
    </S.Layout>
  );
}

export default App;
