import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../constants';

interface PropsType {
    Name: string,
    Address: string,
    Contact: string,
}

export const StoreHeader = ({
    Name, Address, Contact,
}: PropsType) => {
    return (
    <Wrap>
        <NameWrap>{Name}</NameWrap>
        <AddressWrap>{Address}</AddressWrap>
        <ContactWrap>{Contact}</ContactWrap>
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
    background-color: ${COLOR.main};
    color: ${COLOR.white};
`;

const NameWrap = styled.h2`
    font-size: 2rem;
    font-weight: 700;
`;
const AddressWrap = styled.p`
    font-size: 1.2rem;
`;
const ContactWrap = styled.p`
    font-size: 1.2rem;
`;

export default StoreHeader;