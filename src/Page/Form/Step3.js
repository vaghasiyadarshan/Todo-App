import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
function Step3({ onNext,onPrevious }) {
    const validationSchema = yup.object({
        address: yup.string().required('Address is required.'),
        pinCode: yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(5, 'Must be exactly 5 digits')
            .max(5, 'Must be exactly 5 digits')
    });
    const formik = useFormik({
        initialValues: {
            address: '',
            pinCode: ''
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
                        name="address"
                        label="Address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={!!formik.errors.address}
                        helperText={formik.errors.address}
                    />
                    <TextField
                        name="pinCode"
                        label="Pin Code"
                        value={formik.values.pinCode}
                        onChange={formik.handleChange}
                        error={!!formik.errors.pinCode}
                        helperText={formik.errors.pinCode}
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
                        Submit
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

export default Step3;