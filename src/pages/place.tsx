import styled from '@emotion/styled';
import { COLOR } from '../constants';

import PlaceInfo from '../components/place/PlaceInfo';
import PlaceDetail from '../components/place/PlaceDetail';
import { Main } from 'next/document';

export default function Place() {
    return (
    <>
    <PlaceInfo 
        Name='우리할매떡볶이'
        Address='서울 마포구 동교로 222-2'
        Contact='02-000-9000'
    />
    <Map>지도</Map>
    <MainCont>
        <Reviewer>🎉12명이 이 가게의 떡볶이를 자랑해주셨어요🎉</Reviewer>
        <PlaceDetail
            tags = {["기본", "끈적꾸덕", "고추가루", "판떡볶이", "밀떡볶이", "비엔나"]}
            spicy = {1.3}
            ingredient = {["어묵"]} 
            add =  {["삶은계란", "쫄면", "넙적당면", "치즈", "고구마"]}
            sidedish = {["순대", "단호박튀김", "김밥"]}
            price = {3500}
        />
    </MainCont>
    </>
    )
};

const Map = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background: ${COLOR.gray};
    font-size: 50px;
`;

const Reviewer = styled.p`
    margin: 30px 0;
    font-size: 1.6rem;
    text-align: center;
`;
const MainCont = styled.main`
    margin: 0 auto;
    width: 800px;
`;
