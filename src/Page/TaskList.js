// TaskList.js
import React, { useEffect, useState } from 'react';
import TaskListGrid from './TaskListGrid';
import TaskListList from './TaskListList';
import { Button, CircularProgress, Container, Stack } from '@mui/material';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [view, setView] = useState(true);
  const [lodding, setLodding] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  const ChangeView = () => {
    setLodding(true);
    setTimeout(() => {
      setView(!view);
      setLodding(false);
    }, 2000);
  };
  const addTask = (task) => {
    const Tasks = [...tasks, task];
    setTasks(Tasks);
    localStorage.setItem('tasks', JSON.stringify(Tasks));
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const deleteTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTasks);
    localStorage.setItem('tasks', JSON.stringify(deleteTasks));
  };

  return (
    <Container maxWidth="xl">
      <TaskForm addTask={addTask} />
      <Stack direction="row" justifyContent="space-around" mt={3}>
        <Button variant="contained" onClick={ChangeView}>
          {lodding ? (
            <CircularProgress sx={{ color: 'white' }} size={25} />
          ) : view ? (
            'list'
          ) : (
            'Grid'
          )}
        </Button>
      </Stack>
      {view ? (
        <TaskListGrid
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ) : (
        <TaskListList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )}
    </Container>
  );
};

export default TaskList;
