import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';
import { COLOR } from '../../constants';

interface PropsType {
    name: string,
    address: string,
    phonenumber: string,
    like?: number,
    mylike: boolean,
}

export const StoreHeader = ({
    name, address, phonenumber, like
}: PropsType) => {
    const [likeStatus, setLikeStatus] = useState(false);

    const likeStatusChange = () => {
        setLikeStatus(!likeStatus);
    };

    return (
    <Wrap>
        <NameWrap>{name}</NameWrap>
        <AddressWrap>{address}</AddressWrap>
        <ContactWrap>{phonenumber}</ContactWrap>
        <ButtonWrap>
            <Like status={likeStatus} onClick={likeStatusChange}>좋아요 {like ? like : 0}</Like>
            <Navi>길찾기</Navi>
        </ButtonWrap>
    </Wrap>
    );
};

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 230px;
    padding-top: 40px;
    background-color: ${COLOR.main};
    color: ${COLOR.white};
`;

const NameWrap = styled.h2`
    margin: 2px 0;
    font-size: 2.2rem;
    font-weight: 700;
`;
const AddressWrap = styled.p`
    font-size: 1.15rem;
`;
const ContactWrap = styled.p`
    font-size: 1.15rem;
`;

const ButtonWrap = styled.article`
    margin-top: 7px;
    display: Flex;
    gap: 12px;
    button {
        padding: 5px 12px;
        font-size: 18px;
        font-family: 'Pretendard';
        border: 2px solid ${COLOR.white};
        border-radius: 30px;
    }
`;
const Like = styled.button<{status: boolean}>`
    background-color: ${(props) => props.status ? COLOR.white : "none"};
    font-weight: ${(props) => props.status ? "700" : "none"};
    color: ${(props) => props.status ? COLOR.main : COLOR.white};
`;
const Navi  = styled.button`
    color: ${COLOR.white};
`;

export default StoreHeader;