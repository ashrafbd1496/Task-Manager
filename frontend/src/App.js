import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('There was an error fetching the tasks!', error));
  }, []);

  const addTask = task => {
    axios.post('http://localhost:5000/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('There was an error creating the task!', error));
  };

  const updateTask = updatedTask => {
    axios.put(`http://localhost:5000/tasks/${updatedTask._id}`, updatedTask)
      .then(response => {
        setTasks(tasks.map(task => (task._id === updatedTask._id ? response.data : task)));
      })
      .catch(error => console.error('There was an error updating the task!', error));
  };

  const deleteTask = id => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('There was an error deleting the task!', error));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
