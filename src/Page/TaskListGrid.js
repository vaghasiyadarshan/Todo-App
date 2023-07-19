import React from 'react';
import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import AlertDialog from '../Components/UpdateTaskModel';
import { useState } from 'react';

const TaskListGrid = ({ tasks, updateTask, deleteTask }) => {
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
  return (
    <>
      <Box mt={2}>
        <Grid container spacing={3}>
          {tasks?.map((task) => (
            <Grid item xs={12} md={6} lg={4} key={task?.id}>
              <Card
                sx={{
                  border: 'none',
                  boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
                  '@media(max-width: 400px)': {
                    minWidth: '320px'
                  },
                  ':hover': {
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.28)'
                  }
                }}
              >
                <Stack justifyContent="space-between">
                  <Stack>
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      mt={2}
                      mb={2}
                      ml={2}
                      mr={2}
                      spacing={1}
                    >
                      <Typography
                        fontSize={'1.4rem'}
                        fontWeight={700}
                        textAlign="justify"
                        sx={{
                          color: '#2A3A5F',
                          '@media (max-width: 600px)': {
                            fontSize: '30px'
                          }
                        }}
                      >
                        {task.name}
                      </Typography>
                      <Typography
                        fontSize={'1.4rem'}
                        fontWeight={700}
                        textAlign="justify"
                        sx={{
                          color: '#2A3A5F',
                          '@media (max-width: 600px)': {
                            fontSize: '30px'
                          }
                        }}
                      >
                        {task.priority}
                      </Typography>

                      <Typography
                        textAlign="center"
                        fontSize="1rem"
                        fontWeight={600}
                        sx={{ color: '#2A3A5F' }}
                      >
                        {task.status}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" justifyContent="space-around" mb={3}>
                    <Button
                      variant="contained"
                      onClick={() => handleStatusChange(task)}
                    >
                      To Do
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setIsOpen(true);
                        setTaskData(task);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(task)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <AlertDialog
        setOpen={setIsOpen}
        open={isOpen}
        taskData={taskData}
        updateTask={updateTask}
      />
    </>
  );
};

export default TaskListGrid;
