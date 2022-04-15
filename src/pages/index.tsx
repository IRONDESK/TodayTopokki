import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { COLOR } from '../constants';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default Home
