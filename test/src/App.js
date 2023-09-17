import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const addTask = (newTask, newDescription, dueDate) => {
    axios
      .post('http://127.0.0.1:8000/api/tasks/', {
        title: newTask,
        description: newDescription,
        date: dueDate,
      })
      .then((response) => {
        // Mettez à jour l'état avec la nouvelle tâche
        setTasks((prevTasks) => [...prevTasks, response.data]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, response.data]));
        console.log(tasks);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Récupérez les tâches depuis le LocalStorage lors du chargement de la page
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * 10;
const endIndex = startIndex + 10;

// Filtrer les tâches pour afficher uniquement celles de la page actuelle
const tasksToDisplay = tasks.slice(startIndex, endIndex);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    axios
      .put(`http://127.0.0.1:8000/api/tasks/${tasks[index].id}/`, updatedTasks[index])
      .then(() => {
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error(error);
      });;
  };

  const deleteTask = (index) => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${tasks[index].id}/`)
      .then(() => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ma To-Do List</h1>
        <button onClick={openPopup}>Nouvelle tâche</button>
        {isPopupOpen && (
          <TaskForm onClose={closePopup} onAddTask={addTask} />
        )}
        <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask}/>
      </header>
    </div>
  );
}

export default App;
