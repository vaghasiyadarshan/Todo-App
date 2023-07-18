
import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';

const PostListing = ({ task, updateTask, deleteTask }) => {
  const handleStatusChange = () => {
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

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };
  return (
    <>
      <Box mt={2}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  border: 'none',

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

                  <Stack direction="row" justifyContent="space-around" mb={}>
                    <Button
                      // onClick={() => navigate(`/post/${post.id}`)}
                      variant="contained"
                      style={{
                        textTransform: 'none',
                        backgroundColor: '#F1E7F0',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#3E083B'
                      }}
                      onClick={handleStatusChange}
                    >
                      To Do
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        textTransform: 'none',
                        backgroundColor: '#F1E7F0',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#3E083B'
                      }}
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PostListing;
