import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import CommonInput from './CommonInput';
import CustomizedButtons from './CommonButton';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box widht="100%" height="155px">
      <Divider />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        spacing={3}
        justifyContent="space-between"
        p={5}
      >
        <Stack onClick={() => navigate('/')}>
          <Typography variant="h4" sx={{cursor:'pointer'}}>Aimbrill Techinfo</Typography>
          <Typography variant="body1" color="gray">
            Copyright © 2021 Aimbrill Techinfo | All Rights Reserved
          </Typography>
        </Stack>
        <Stack width={{ xs: '100%', md: '50%' }}>
          <CommonInput
            placeholder="Enter your email"
            icon={<CustomizedButtons>Subscribe</CustomizedButtons>}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
