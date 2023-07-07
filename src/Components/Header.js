import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomizedButtons from './CommonButton';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        height="50px"
        alignItems="center"
        p={5}
      >
        <Box>
          <Typography variant="h4">Aimbrill Techinfo</Typography>
        </Box>
        <Box>
          <CustomizedButtons onClick={() => navigate('/EmployeeList')}>
            Employee List
          </CustomizedButtons>
        </Box>
      </Stack>
    </>
  );
};

export default Header;
