import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Box, Card, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CustomizedButtons from '../Components/CommonButton';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
const EmployeeList = () => {
  const navigate = useNavigate();

  const [row, setRow] = useState([]);
  const [isLoading, setIslodding] = useState(false);

  console.log(row, 'row');
  const [pageSize, setPageSize] = useState(7);
  const getData = async () => {
    setIslodding(true);
    const arr = [];
    const querySnapshot = await getDocs(collection(db, 'Emp'));
    let i = 1;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      arr.push({ data: doc.data(), id: i++ });
    });
    setRow(arr);
    setIslodding(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      flex: 0.05,
      field: 'id',
      headerName: 'id',
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                noWrap
                variant="body2"
                sx={{ color: 'primary', fontWeight: 600, marginLeft: 2 }}
              >
                {params.row.id}
              </Typography>
            </Box>
          </Box>
        );
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'name',
      headerName: 'Name',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                noWrap
                variant="body2"
                sx={{ color: 'primary', fontWeight: 600, marginLeft: 2 }}
              >
                {row?.data.name}
              </Typography>
              <Typography
                noWrap
                variant="body2"
                sx={{ color: 'primary', fontWeight: 400, marginLeft: 2 }}
              >
                {row?.data.phone}
              </Typography>
            </Box>
          </Box>
        );
      }
    },

    {
      flex: 0.1,
      minWidth: 20,
      field: 'email',
      headerName: 'Email',
      renderCell: (params) => {
        const { row } = params;

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                noWrap
                variant="body2"
                sx={{ color: 'primary', fontWeight: 600, marginLeft: 2 }}
              >
                {row.data.email}
              </Typography>
            </Box>
          </Box>
        );
      }
    },

    {
      flex: 0.1,
      minWidth: 50,
      field: 'Company',
      headerName: 'Company',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: 1
              }}
            >
              {row.data.company}
            </Box>
          </Box>
        );
      }
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'services',
      headerName: 'services',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: 1
              }}
            >
              {row.data.services}
            </Box>
          </Box>
        );
      }
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'cost',
      headerName: 'cost',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: 1
              }}
            >
              {row.data.cost}
            </Box>
          </Box>
        );
      }
    }
  ];
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1
      }}
    >
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <CustomizedButtons
          startIcon={<AddIcon />}
          onClick={() => navigate('/FormWizard')}
        >
          Add Employee
        </CustomizedButtons>
      </Box>
      <Card>
        {/* <CardContent> */}
        <DataGrid
          loading={isLoading}
          rows={row}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[7, 10, 25, 50]}
          checkboxSelection
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          sx={{
            height: '500px',
            borderRadius: 2,
            borderTop: 1,
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main'
            },
            '& .MuiDataGrid-cell': {},
            '& .MuiDataGrid-row': {
              borderBottom: '1px solid Lightgray'
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: '1px solid Lightgray',
              bgcolor: 'lightgray',
              paddingLeft: 2
            }
          }}
        />
        {/* </CardContent> */}
      </Card>
    </Box>
  );
};

export default EmployeeList;
