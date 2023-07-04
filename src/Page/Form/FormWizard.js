
import React, { useState } from 'react';
import { Box,  Paper, Stack, Typography,  } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function FormWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
 
  return (
    <div>
      <Box
        mt={4}
        mb={4}
        ml={{ xs: '0.5%', sm: '0.5%' }}
        sx={{
          '@media (max-width:375px)': {
            marginLeft: '4.5%'
          }
        }}
      >
        <Stack alignItems="center" justifyContent="center">
          <Paper elevation={2} sx={{ width: { xs: 'auto', md: '450px' } }}>
            <Stack p={4}>

              <Stack
                justifyContent="center"
                alignItems="center"
                mb={4}
                spacing={1}
              >
                <Typography
                  fontWeight={700}
                  fontSize="1.9rem"
                  color="#3E083B"
                  className="text"
                >
                  Personal Information
                </Typography>

              </Stack>
              {currentStep === 1 && (
                <Step1 onNext={handleNext} />
              )}

              {currentStep === 2 && (
                <Step2 onPrevious={handlePrevious} onNext={handleNext} />
              )}

              {currentStep === 3 && (
                <Step3 onPrevious={handlePrevious} onNext={handleNext}/>
              )}
               {currentStep === 4 && (
                <Typography variant='h4'>Thank you</Typography>
              )}

            </Stack>
          </Paper>
        </Stack>
      </Box>

    </div>
  );
}
export default FormWizard;