import styled from '@emotion/styled';

export default function Dropdown({ children, icon: Icon }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Menu>{children}</Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const IconWrapper = styled.i``;
const Menu = styled.ul``;
