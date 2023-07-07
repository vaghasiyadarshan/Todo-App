import React, { useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import HorizontalStepper from '../../Components/HorizontalStepper';

function FormWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setActiveStep(activeStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Box mt={4} mb={4}>
        <Stack alignItems="center" justifyContent="center">
          <Paper
            elevation={2}
            sx={{
              width: { xs: 'auto', md: '770px' },
              borderRadius: 7,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Stack p={4}>
              <Stack
                justifyContent="center"
                alignItems="center"
                mb={4}
                spacing={1}
              >
                <HorizontalStepper activeStep={activeStep} />
              </Stack>
              {currentStep === 1 && (
                <Step1 onNext={handleNext} setActiveStep={setActiveStep} />
              )}

              {currentStep === 2 && (
                <Step2
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  setActiveStep={setActiveStep}
                />
              )}

              {currentStep === 3 && (
                <Step3
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  setActiveStep={setActiveStep}
                />
              )}
              {currentStep === 4 && (
                <Step4
                  setActiveStep={setActiveStep}
                  setCurrentStep={setCurrentStep}
                />
              )}
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </div>
  );
}
export default FormWizard;
