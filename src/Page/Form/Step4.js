import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import SuccessImge from '../../Assets/SuccessImage.png';
import CustomizedButtons from '../../Components/CommonButton';
import { useSelector } from 'react-redux';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
const Step4 = ({ setCurrentStep }) => {
  const data = useSelector((state) => state.Fromreducer);
  console.log(data, 'data');
  const submitData = async () => {
    // Add a new document with a generated id
    const Ref = doc(collection(db, 'Emp'));
    const { FirstName, email, phone, company } = data[0];
    console.log(FirstName, email, phone, company);
    // // later...
    await setDoc(Ref, {
      name: FirstName,
      email: email,
      phone: phone,
      company: company,
      cost: data[2],
      services: data[1]
    })
      .then(() => {
        console.log('upload');
        setCurrentStep(1);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Stack justifyContent="center" alignItems="center" spacing={3} mb={5}>
        <Box
          component="img"
          alt="img"
          width="157px"
          height="143px"
          src={SuccessImge}
        ></Box>
        <Typography variant="h5" fontSize="24px" fontWeight="700">
          Submit your quote request
        </Typography>
        <Typography textAlign="center" fontWeight="400" fontSize="18px">
          Please review all the information you previously typed in <br /> the
          past steps, and if all is okay, submit your message to <br /> receive
          a project quote in 24 - 48 hours.
        </Typography>

        <CustomizedButtons onClick={submitData}>Submit</CustomizedButtons>
      </Stack>
    </>
  );
};

export default Step4;
