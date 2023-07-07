import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CommonInput from '../../Components/CommonInput';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { EmailOutlined } from '@mui/icons-material';
import CustomizedButtons from '../../Components/CommonButton';
import { useDispatch } from 'react-redux';
import { pushData } from '../../Store/FromSlice';
function Step1({ onNext }) {
  const dispatch = useDispatch();

  const handlePushData = (data) => {
    dispatch(pushData(data));
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    FirstName: yup.string().required('FirstName is required.'),
    company: yup.string().required('Company is required.'),
    email: yup.string().email('INVALID EMAIL').required('Email is required'),

    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone')
      .max(10, 'must be 10')
      .min(10, 'must be 10')
      .required('Phone is required')
  });
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      phone: '',
      email: '',
      company: ''
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handlePushData(values);
      onNext();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Stack alignItems="center">
            <Typography variant="h5" fontWeight="600" mb={2}>
              Get an Employee Information
            </Typography>
            <Typography mb={3} textAlign="center" variant="body1">
              Please fill the form below to receive a quote for your project.
              <br></br>
              Feel free to add as much detail as needed.
            </Typography>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <CommonInput
              icon={<PersonIcon />}
              placeholder="John Carter"
              label="Name"
              name="FirstName"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              error={!!formik.errors.FirstName}
              helperText={formik.errors.FirstName}
            ></CommonInput>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <CommonInput
              icon={<EmailOutlined />}
              placeholder="Email address"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            ></CommonInput>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <CommonInput
              icon={<PhoneIphoneOutlinedIcon />}
              placeholder="(123) 456 - 7890"
              name="phone"
              type="number"
              label="phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={!!formik.errors.phone}
              helperText={formik.errors.phone}
            ></CommonInput>
          </Stack>
        </Grid>
        <Grid items xs={12} md={6}>
          <Stack p={3}>
            <CommonInput
              placeholder="Company name"
              icon={<ApartmentOutlinedIcon />}
              name="company"
              label="Company"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={!!formik.errors.company}
              helperText={formik.errors.company}
            ></CommonInput>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent={{ md: 'flex-end', xs: 'flex-start' }}
        >
          <CustomizedButtons type="submit">Next step</CustomizedButtons>
        </Grid>
      </Grid>
    </form>
  );
}

export default Step1;
