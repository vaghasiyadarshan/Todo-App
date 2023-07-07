import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Stack } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <Stack sx={{ height: '100vh', justifyContent: 'space-between' }}>
        <Stack>
          <Header />
          <Stack>
            <main>{children}</main>
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;
