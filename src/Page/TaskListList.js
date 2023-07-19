import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, IconButton, Tooltip, Typography } from '@mui/material';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { DataGrid } from '@mui/x-data-grid';
import AlertDialog from '../Components/UpdateTaskModel';
const TaskListList = ({ tasks, deleteTask, updateTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskData, setTaskData] = useState('');
  const handleStatusChange = (task) => {
    let updatedStatus = '';
    switch (task.status) {
      case 'To do':
        updatedStatus = 'Doing';
        break;
      case 'Doing':
        updatedStatus = 'Done';
        break;
      case 'Done':
        updatedStatus = 'On Hold';
        break;
      case 'On Hold':
        updatedStatus = 'To do';
        break;
      default:
        updatedStatus = 'To do';
        break;
    }
    updateTask(task.id, { status: updatedStatus });
  };

  const handleDelete = (task) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };
  const [pageSize, setPageSize] = useState(7);
  const columns = [
    {
      flex: 0.1,
      minWidth: 200,
      field: 'id',
      headerName: 'id',
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                noWrap
                variant="body2"
                sx={{ color: 'primary', fontWeight: 600 }}
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
      minWidth: 200,
      field: 'name',
      headerName: 'Name',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant="body2" sx={{ color: 'primary' }}>
                {row?.name}
              </Typography>
            </Box>
          </Box>
        );
      }
    },

    {
      flex: 0.1,
      minWidth: 150,
      field: 'priority',
      headerName: 'Priority',
      renderCell: (params) => {
        const { row } = params;

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant="body2" sx={{ color: 'primary' }}>
                {row.priority}
              </Typography>
            </Box>
          </Box>
        );
      }
    },

    {
      flex: 0.1,
      minWidth: 100,
      field: 'status',
      headerName: 'Status',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {row.status}
            </Box>
          </Box>
        );
      }
    },
    {
      flex: 0.1,
      minWidth: 200,
      field: 'Action',
      headerName: 'Action',
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <Tooltip title="To DO">
                <IconButton onClick={() => handleStatusChange(row)}>
                  <ChangeCircleIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => {
                    setIsOpen(true);
                    setTaskData(row);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => handleDelete(row)}
                  sx={{
                    ':hover': {
                      bgcolor: 'red'
                    }
                  }}
                >
                  <DeleteIcon
                    sx={{
                      ':hover': {
                        color: 'white'
                      }
                    }}
                  />
                </IconButton>
              </Tooltip>
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
      mt={3}
    >
      <Card>
        {/* <CardContent> */}
        <DataGrid
          rows={tasks}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[7, 10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
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
              bgcolor: 'lightgray'
            }
          }}
        />
        {/* </CardContent> */}
      </Card>
      <AlertDialog
        setOpen={setIsOpen}
        open={isOpen}
        taskData={taskData}
        updateTask={updateTask}
      />
    </Box>
  );
};

export default TaskListList;
