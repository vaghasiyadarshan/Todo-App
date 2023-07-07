import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import StepConnector, {
  stepConnectorClasses
} from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: '10%',
    marginLeft: '10%'
  },
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 13,
    width: { xs: '80%', md: '60%' }
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(136deg, #4A3AFF 0%, #4A3AFF 50%, #4A3AFF 100%)'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(136deg, #4A3AFF 0%, #4A3AFF 0%, #4A3AFF 100%)'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#6F6C90',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(136deg, #4A3AFF 0%, #4A3AFF 0%, #4A3AFF 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: 'white'
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(136deg, #4A3AFF 0%, #4A3AFF 0%, #4A3AFF 100%)',
    color: 'white'
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['step1', 'step2', 'step 3', 'step 4'];

export default function HorizontalStepper({ activeStep }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
