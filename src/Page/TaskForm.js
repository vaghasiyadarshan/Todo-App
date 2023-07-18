import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');
  const [status, setStatus] = useState('To do');

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
      addTask(newTask);
      setTaskName('');
      setPriority('low');
      setStatus('To do');
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
            <Select
              fullWidth
              label="Priority"
              value={priority}
              onChange={handlePriorityChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ padding: 2 }}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TaskForm;
