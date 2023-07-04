import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
function Step1({ onNext }) {
 const validationSchema = yup.object({
    FirstName: yup.string().required('FirstName is required.'),
    LastName: yup.string().required('LastName is required.')
  });
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: ''
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
        onNext()
      console.log(values)
    }
  });
  
  return (
      <form onSubmit={formik.handleSubmit}>
               
                  <>
                    <Stack spacing={3}>

                      <TextField
                        name="FirstName"
                        label="First Name"
                        value={formik.values.FirstName}
                        onChange={formik.handleChange}
                        error={!!formik.errors.FirstName}
                        helperText={formik.errors.FirstName}
                      />
                      <TextField
                        name="LastName"
                        label="Last Name"
                        value={formik.values.LastName}
                        onChange={formik.handleChange}
                        error={!!formik.errors.LastName}
                        helperText={formik.errors.LastName}
                      />

                    </Stack>
                    <Stack mt={5} mb={2}>
                      <Button
                        style={{
                          textTransform: 'none',
                          borderRadius: '4px',
                          backgroundColor: '#3E083B',
                          color: 'white',
                          width: '100%'
                        }}
                        className="button-container"
                        sx={{ fontSize: '18px', fontWeight: 600 }}

                        type="submit" 
                      >
                        Next
                      </Button>
                    </Stack>
                  </>
                
              </form>
  );
}

export default Step1;