import styled, { css } from 'styled-components';
import Loading from './Loading';

export default function List({ open, loading, data }) {
  return (
    <Ul open={open}>
      {loading && <Loading />}
      {data &&
        data.map(({ id, title, imgSrc, author }) => (
          <Li key={id}>
            <Lecture>
              <Img src={imgSrc} />
              <TextBox>
                {title}
                <Desc>{author}</Desc>
              </TextBox>
            </Lecture>
          </Li>
        ))}
    </Ul>
  );
}

const Ul = styled.ul`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  ${({ open }) =>
    !open &&
    css`
      overflow: hidden;
      max-height: 0;
    `};
`;
const Li = styled.li`
  padding: 1.2rem;
`;
const Lecture = styled.span`
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding-left: 1rem;
`;
const Img = styled.img`
  width: 10rem;
`;
const Desc = styled.p`
  margin-top: 1.2rem;
  font-size: 1.5rem;
  color: #777;
`;
