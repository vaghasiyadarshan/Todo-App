import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { ReactComponent as DeveloperIcon } from '../../Assets/Icon/Developer.svg';
import CustomizedButtons from '../../Components/CommonButton';
import { useDispatch } from 'react-redux';
import { pushData } from '../../Store/FromSlice';
function Step2({ onNext, onPrevious }) {
  const [selectItems, setSelectItems] = useState('Development');
  const dispatch = useDispatch();

  const handlePushData = () => {
    dispatch(pushData(selectItems));
  };
  return (
    <>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
              border={selectItems === 'Development' ? '3px solid blue' : ''}
              sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
              width="284px"
              height="114px"
            >
              <Stack direction="row" alignItems="center" mt={3} ml={3}>
                {' '}
                <IconButton
                  sx={{ p: 2, bgcolor: '#4A3AFF', opacity: '15%' }}
                  onClick={() => setSelectItems('Development')}
                >
                  <DeveloperIcon />
                </IconButton>
                <Typography fontSize="18px" fontWeight={600} ml={3}>
                  Development
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <Box
              borderRadius={5}
              border={selectItems === ' Web Design' ? '3px solid blue' : ''}
              sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
              width="284px"
              height="114px"
            >
              <Stack direction="row" alignItems="center" mt={3} ml={3}>
                {' '}
                <IconButton
                  sx={{ p: 2, bgcolor: '#4A3AFF', opacity: '15%' }}
                  onClick={() => setSelectItems(' Web Design')}
                >
                  <DeveloperIcon />
                </IconButton>
                <Typography fontSize="18px" fontWeight={600} ml={3}>
                  Web Design
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <Box
              borderRadius={5}
              border={selectItems === 'Marketing' ? '3px solid blue' : ''}
              sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
              width="284px"
              height="114px"
            >
              <Stack direction="row" alignItems="center" mt={3} ml={3}>
                {' '}
                <IconButton
                  sx={{ p: 2, bgcolor: '#4A3AFF', opacity: '15%' }}
                  onClick={() => setSelectItems('Marketing')}
                >
                  <DeveloperIcon />
                </IconButton>
                <Typography fontSize="18px" fontWeight={600} ml={3}>
                  Marketing
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <Box
              borderRadius={5}
              border={selectItems === 'Other' ? '3px solid blue' : ''}
              sx={{ boxShadow: '0px 4px 10px 0px #1F255912' }}
              width="284px"
              height="114px"
            >
              <Stack direction="row" alignItems="center" mt={3} ml={3}>
                {' '}
                <IconButton
                  sx={{ p: 2, bgcolor: '#4A3AFF', opacity: '15%' }}
                  onClick={() => setSelectItems('Other')}
                >
                  <DeveloperIcon />
                </IconButton>
                <Typography fontSize="18px" fontWeight={600} ml={3}>
                  Other
                </Typography>
              </Stack>
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
              handlePushData();
              onNext();
            }}
          >
            Next step
          </CustomizedButtons>
        </Grid>
      </Grid>
    </>
  );
}

export default Step2;
