import React from 'react';
import './TaskDetailsModal.css';

function TaskDetailsModal({ task, onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Détails de la Tâche</h2>
        <p><strong>Tâche : </strong>{task.title}</p>
        <p><strong>Description : </strong>{task.description}</p>
        {task.date && <p><strong>A faire avant le : </strong>{task.date}</p>}
        <p><strong>Statut : </strong>{task.completed ? 'Accomplie 👍' : 'Non accomplie 👎'}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default TaskDetailsModal;