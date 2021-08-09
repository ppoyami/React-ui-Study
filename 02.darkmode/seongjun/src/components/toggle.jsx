import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  transition: all 0.2s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Monkey = styled.button`
  cursor: pointer;
  font-size: 50px;
  border: none;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => props.theme.titleColor};
  transition: all 0.2s ease;
`;

const Toggle = (props) => {
  const handleTheme = () => {
    props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light');
  };

  const icon = props.theme === 'light' ? '🙉' : '🙈';

  return (
    <Page>
      <Container>
        <Monkey
          onClick={() => {
            handleTheme();
          }}
        >
          {icon}
        </Monkey>
        <Title>Touch your Monkey!</Title>
      </Container>
    </Page>
  );
};

export default Toggle;
