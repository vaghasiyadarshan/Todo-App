import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#4A3AFF'),
  backgroundColor: '#4A3AFF',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#4A3AFF'
  },
  fontSize: '16x', // Set the font size her
  fontWeight: '700',
  padding: '10px 30px 10px 30px'
}));

export default function CustomizedButtons({ children, ...props }) {
  return (
    <ColorButton variant="contained" {...props}>
      {children}
    </ColorButton>
  );
}
