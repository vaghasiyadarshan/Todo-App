import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import { Stack, Typography } from '@mui/material';
const CustomTextField = styled(TextField)(() => ({
  fontSize: '16x',
  backgroundColor: '#FFFFFF',

  '& .MuiInputBase-input::placeholder': {
    color: '#6F6C90', // Placeholder text color
    fontSize: '18px',
    fontWeight: '400'
  }
}));
const CommonInput = ({ label, icon, ...props }) => {
  return (
    <>
      <Stack spacing={1}>
        <Typography ml={1} fontSize="18px" variant="body1">
          {label}
        </Typography>
        <CustomTextField
          {...props}
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: <IconButton>{icon}</IconButton>,
            style: {
              borderRadius: '30px',
              border: 'none',
              fontFamily: 'Roboto',
              fontSize: '14px',
              height: '73px',
              boxShadow: '0px 2px 6px 0px #13124212'
            }
          }}
        />
      </Stack>
    </>
  );
};
export default CommonInput;
