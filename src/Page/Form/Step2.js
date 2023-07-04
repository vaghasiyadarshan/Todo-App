import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
function Step2({ onNext ,onPrevious}) {
 const validationSchema = yup.object({
    email: yup.string().email("email invalid").required('Email is required.'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    validateOnChange: false,

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
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={!!formik.errors.email}
                        helperText={formik.errors.email}
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

                        onClick={onPrevious}
                      >
                        Back
                      </Button>
                    </Stack>
                  </>
              </form>
  );
}

export default Step2;