import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../constants';

export const Header = () => {
  return (
    <Wrap>
      <Logotype>오떠끼</Logotype>
      <SearchForm method="GET">
        <SearchInput type="text" />
      </SearchForm>
    </Wrap>
  );
};

const Wrap = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 170px;
  background-color: ${COLOR.main};
`;

const Logotype = styled.a`
  color: ${COLOR.white};
  font-weight: 700;
  font-size: 3rem;
`;

const SearchForm = styled.form`
  
`;
const SearchInput = styled.input`
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, -75%);
  padding: 8px 30px;
  width: 500px;
  height: 73px;
  color: ${COLOR.main};
  font-family: 'Pretendard';
  font-size: 1.8rem;
  border: 8px solid ${COLOR.main};
  border-radius: 60px;
`;

export default Header;