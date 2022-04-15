import React from 'react';
import styled from '@emotion/styled';
import { Header, Footer } from './';
import { Title } from './partials/Title';

export const Layout: React.FunctionComponent = ({ children }: any) => {
  return (
    <>
      <Title title="오늘의 떡볶이" />
      <Header />
      {children}
      <Footer />
    </>
  );
};
