import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../constants';

interface PropsType {
    Name: string,
}

export const PlaceTag = ({ Name }: PropsType) => {
    return (
    <Wrap>#{Name}</Wrap>
    );
};

const Wrap = styled.span`
    padding: 4px 8px;
    color: ${COLOR.main};
    font-weight: 600;
    font-size: 1.4rem;
    border: 3px solid ${COLOR.main};
    border-radius: 15px;
`;

export default PlaceTag;