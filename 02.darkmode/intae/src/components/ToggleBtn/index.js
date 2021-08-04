import React from 'react';

import * as S from './ToggleBtn.styled';
import { useTheme } from '../../context';
import { DARK, LIGHT } from '../../constants';

export default function ToggleBtn() {
  const { mode, onToggle } = useTheme();

  return (
    <S.Switch>
      {mode === LIGHT ? (
        <S.Checkbox checked type="checkbox" onChange={onToggle} />
      ) : (
        <S.Checkbox type="checkbox" onChange={onToggle} />
      )}
      <S.Slider />
    </S.Switch>
  );
}
