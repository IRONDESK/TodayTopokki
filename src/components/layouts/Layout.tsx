import React from 'react';
import styled from '@emotion/styled';
import { Title } from './Title';

export const Layout: React.FunctionComponent = ({ children }: any) => {
  return (
    <>
      <Title title="오늘의 떡볶이" />
      {children}
    </>
  );
};

export default Layout;