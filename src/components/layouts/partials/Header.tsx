import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../../constants';

export const Header = () => {
  return (
    <>
      <Title>Hello</Title>
    </>
  );
};

const Title = styled.div`
  background-color: blue;
  width: 100%;
  height: 10vh;
`;