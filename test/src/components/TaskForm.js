import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onClose, onAddTask }) {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isDueDateEnabled, setIsDueDateEnabled] = useState(false);
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ({ title: newTask, description: newDescription, completed: false, date:dueDate }) {
      onAddTask(newTask, newDescription, dueDate);
      setNewTask('');
      setNewDescription('');
      setIsDueDateEnabled(false);
      setDueDate(null);
      onClose();
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-inner">
        <h2>Nouvelle Tâche</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nouvelle tâche"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ajouter des détails"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={isDueDateEnabled}
              onChange={() => setIsDueDateEnabled(!isDueDateEnabled)}
            />
            Ajouter une date
          </label>
          {isDueDateEnabled && (
            <input
              type="date"
              value={dueDate || ''}
              onChange={(e) => setDueDate(e.target.value)}
            />
          )}
          <button type="submit">Ajouter</button>
          <button onClick={onClose}>Annuler</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;