import React from 'react';
import Header from '../layout/Header';
import { Container } from '@mui/material';
import styled from 'styled-components';

const MainContainer = styled(Container)`
  padding-top: 2rem;
  min-height: calc(100vh - 64px);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
