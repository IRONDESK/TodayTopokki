import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../constants';

import PlaceTag from './PlaceTag';

interface PropsType {
    tags: string[],
    spicy: number,
    ingredient: string[],
    add: string[],
    sidedish: string[],
    price: number,
}

export const PlaceDetail = ({ tags, spicy, ingredient, add, sidedish, price }: PropsType) => {
    return (
    <>
        <TagContainer>
            { tags.map( (item) => {return (<PlaceTag Name={item}/>)}) }
        </TagContainer>
        <ListWrap>
            <li>
                <DT>맵기</DT>
                <DD>
                    <Spicy><SpicyGraph point={spicy} /></Spicy>
                    🌶️{spicy.toFixed(1)}
                </DD>
            </li>
            <li>
                <DT>기본재료</DT>
                <DD><TagGroup>{ ingredient.map( (item) => {return (<PlaceTag Name={item}/>)}) }</TagGroup></DD>
            </li>
            <li>
                <DT>추가재료</DT>
                <DD><TagGroup>{ add.map( (item) => {return (<PlaceTag Name={item}/>)}) }</TagGroup></DD>
            </li>
            <li>
                <DT>사이드</DT>
                <DD><TagGroup>{ sidedish.map( (item) => {return (<PlaceTag Name={item}/>)}) }</TagGroup></DD>
            </li>
            <li>
                <DT className='single-price'>1인분 가격</DT>
                <DD>{price.toLocaleString('ko-KR')}원</DD>
            </li>
        </ListWrap>
    </>
    );
};

const TagContainer = styled.article`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

const ListWrap = styled.ul`
    display: flex;
    margin: 45px auto 0 auto;
    gap: 17px;
    flex-direction: column;
    width: 68%;
    li {
        display: flex;
        align-items: center;
        gap: 13px;
    }
`;
const DT = styled.dt`
    font-weight: 700;
    font-size: 1.4rem;
    text-align: right;
    flex: 1;
    &.single-price {
        letter-spacing: -1px;
    }
`;
const DD = styled.dd`
    color: ${COLOR.main};
    font-size: 1.5rem;
    font-weight: 700;
    overflow: hidden;
    flex: 4;
`;

const TagGroup = styled.p`
    display: flex;
    gap: 6px;
    width: 600px;
`;

const Spicy = styled.div`
    position: relative;
    display: inline-block;
    width: 82%;
    height: 25px;
    background-color: rgba(${COLOR.mainrgb}, 0.3);
    border-radius: 20px;
    overflow: hidden;
    `;
const SpicyGraph = styled.div<{point: number}>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => (props.point / 5 * 100)}%;
    height: 25px;
    background-color: ${COLOR.main};
    border-radius: 20px;
`;

export default PlaceDetail;