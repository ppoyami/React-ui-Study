import React from 'react';

import * as S from './ToggleBtn.styled';
import { useTheme } from '../../context';

export default function ToggleBtn() {
  const { onToggle } = useTheme();
  return (
    <S.Switch>
      <S.Checkbox type="checkbox" onChange={onToggle} />
      <S.Slider />
    </S.Switch>
  );
}
