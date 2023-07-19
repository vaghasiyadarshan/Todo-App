import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To do');
  const [lodding, setLodding] = useState(false);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: taskName,
        priority,
        status
      };
      setLodding(true);
      setTimeout(() => {
        addTask(newTask);
        setTaskName('');
        setPriority('Low');
        setStatus('To do');
        setLodding(false);
      }, 2000);
    }
  };

  return (
    <>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="text"
              label=" Task Name"
              required
              value={taskName}
              onChange={handleTaskNameChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Priority"
                fullWidth
                value={priority}
                onChange={handlePriorityChange}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ padding: 2 }}
            >
              {lodding ? (
                <CircularProgress sx={{ color: 'white' }} size={25} />
              ) : (
                'Add Task'
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TaskForm;
