import React from 'react';
import styled, { css } from 'styled-components';

import loading from '../../static/img/loading.png';

export default function Loading() {
  return (
    <Wrapper>
      <Icon src={loading} />;
    </Wrapper>
  );
}

const Icon = styled.div`
  margin: 0 auto;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  ${({ src }) => css`
    background: url(${src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `};
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  ${({ theme }) => theme.align.flexCenter}
`;
