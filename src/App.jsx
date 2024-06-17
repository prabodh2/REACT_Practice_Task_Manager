import React, { useState } from 'react';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setCurrentTask(null);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setCurrentTask(taskToEdit);
  };

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={addTask} currentTask={currentTask} updateTask={updateTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={editTask} />
    </div>
  );
};

export default App;
