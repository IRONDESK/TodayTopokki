import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../constants';

export const Footer = () => {
  return (
    <Wrap>
      <Title>Footer</Title>
    </Wrap>
  );
};

const Wrap = styled.section`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 65px;
  border: 1px solid ${COLOR.boxBorder};
  border-radius: 50px;
  box-shadow: 0 0 10px 2px ${COLOR.gray};
`;
const Title = styled.h1`
  font-size: 30px;
`;

export default Footer;