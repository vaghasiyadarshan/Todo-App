import { Stack, Typography, Box, Paper, Button } from '@mui/material';
import React from 'react';
import CommonInput from '../Components/CommonInput';
import CustomizedButtons from '../Components/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
const Home = () => {
  const navigate = useNavigate();
  // const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText('#4A3AFF'),
  //   backgroundColor: '#4A3AFF',
  //   borderRadius: '50px',
  //   '&:hover': {
  //     backgroundColor: '#4A3AFF'
  //   },
  //   fontSize: '16x', // Set the font size her
  //   fontWeight: '700',
  //   padding: '10px 30px 10px 30px'
  // }));

  return (
    <>
      <Stack>
        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Typography variant="h3" textAlign="center" fontWeight={600}>
            Multi-step Form Webflow <br /> Cloneable Template
          </Typography>
          <Typography variant="body1" textAlign="center">
            Want to receive a monthly email in your inbox with awesome free
            Webflow
          </Typography>
          <Typography variant="body1" textAlign="center">
            cloneables, resources and more? Please submit your email below.
          </Typography>
          <Box width={{ xs: '80%', md: '35%' }}>
            <Stack mt={5} mb={2}>
              <CommonInput
                placeholder="Enter your email"
                icon={<CustomizedButtons>Subscribe</CustomizedButtons>}
              />
            </Stack>
          </Box>
          <Stack
            mt={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <CheckCircleIcon sx={{ color: ' #4A3AFF' }} />
            <Typography variant="body2">
              Its <span style={{ color: 'blue' }}> 100% free </span>
              and we will never send more than one email per month
            </Typography>
          </Stack>
        </Stack>

        <Stack p={{ xs: 5, md: 15 }}>
          <Paper
            elevation={1}
            bgcolor="white"
            sx={{
              p: 4,
              borderRadius: '18px',
              boxShadow: '0px 12px 24px 0px #14142B0A'
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems="center"
              spacing={3}
              justifyContent="space-between"
            >
              <Typography variant="h5" fontWeight={700}>
                Multi Step Form - Step 1
              </Typography>

              <Box>
                <Button
                  sx={{
                    backgroundColor: '#F3F1FF',
                    borderRadius: '50px',
                    '&:hover': {
                      backgroundColor: '#F3F1FF'
                    },
                    fontSize: '16x', // Set the font size her
                    fontWeight: '700',
                    padding: '10px 30px 10px 30px',
                    color: '#4A3AFF'
                  }}
                  variant="contained"
                  onClick={() => navigate('/FormWizard')}
                >
                  Preview Cloneable
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
