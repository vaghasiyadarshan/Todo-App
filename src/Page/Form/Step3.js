import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';
import CustomizedButtons from '../../Components/CommonButton';
import { useDispatch } from 'react-redux';
import { pushData } from '../../Store/FromSlice';

function Step3({ onNext, onPrevious }) {
  const [value, setValue] = React.useState('$5.000 - $10.000');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePushData = () => {
    dispatch(pushData(value));
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="600" mb={2}>
                Our services
              </Typography>
              <Typography mb={3}>
                Please select which service you are interested in.
              </Typography>
            </Grid>
            <Grid items xs={12} md={6}>
              <Stack p={3}>
                <Box
                  borderRadius={5}
                  // border={selectItems === 'Development' ? '3px solid blue' : ''}
                  sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
                  width="284px"
                  height="114px"
                  display="flex"
                  pl={5}

                  //   alignItems="center"
                  //   justifyContent="center"
                >
                  <FormControlLabel
                    defaultChecked
                    value="$5.000 - $10.000"
                    control={<Radio />}
                    label="$5.000 - $10.000"
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid items xs={12} md={6}>
              <Stack p={3}>
                <Box
                  borderRadius={5}
                  // border={selectItems === 'Development' ? '3px solid blue' : ''}
                  sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
                  width="284px"
                  height="114px"
                  display="flex"
                  pl={5}
                >
                  <FormControlLabel
                    value="$10.000 - $20.000"
                    control={<Radio />}
                    label="$10.000 - $20.000"
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid items xs={12} md={6}>
              <Stack p={3}>
                <Box
                  borderRadius={5}
                  // border={selectItems === 'Development' ? '3px solid blue' : ''}
                  sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
                  width="284px"
                  height="114px"
                  display="flex"
                  pl={5}
                >
                  <FormControlLabel
                    value="$20.000 - $50.000"
                    control={<Radio />}
                    label="$20.000 - $50.000"
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid items xs={12} md={6}>
              <Stack p={3}>
                <Box
                  borderRadius={5}
                  // border={selectItems === 'Development' ? '3px solid blue' : ''}
                  sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
                  width="284px"
                  height="114px"
                  display="flex"
                  pl={5}
                >
                  <FormControlLabel
                    value="$50.000 +"
                    control={<Radio />}
                    label="$50.000 +"
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="outlined"
                style={{
                  color: '#4A3AFF',
                  borderRadius: '60px',
                  borderColor: '#4A3AFF',
                  '&:hover': {
                    backgroundColor: '#F3F1FF'
                  },
                  fontSize: '16x', // Set the font size here
                  minWidth: '195px',
                  height: '50px'
                }}
                onClick={() => onPrevious()}
              >
                Next step
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent={{ md: 'flex-end', xs: 'flex-start' }}
            >
              <CustomizedButtons
                onClick={() => {
                  onNext();
                  handlePushData();
                }}
              >
                Next step
              </CustomizedButtons>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Step3;
