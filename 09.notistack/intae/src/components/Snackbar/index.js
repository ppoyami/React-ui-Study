import React from 'react';

import * as S from './Snackbar.styled';
import Portal from '../../hoc/Portal';

export default function Snackbar({ message, variant }) {
  return (
    <Portal elementId="notistack">
      <S.Snackbar variant={variant}>
        <S.Text variant={variant}>{message}</S.Text>
      </S.Snackbar>
    </Portal>
  );
}
