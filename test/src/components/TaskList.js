import React, {useState} from 'react';
import './TaskList.css';
import TaskDetailsModal from './TaskDetailsModal';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const tasksPerPage = 10;

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDetails = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = currentPage * tasksPerPage;

  // Filtrer les tâches pour afficher uniquement celles de la page actuelle
  const tasksToDisplay = tasks.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Liste des tâches actuelles</h2>
      <ul>
        {tasksToDisplay.map((task, index) => (
          <li key={index}
              className={task.completed ? 'completed-task' : 'incomplete-task'}>
            {task.title} {/* Affiche le texte de la tâche */}
            <button onClick={() => onToggleTask(index)}>
              {task.completed ? '✅' : '❌'}
            </button>
            <button onClick={() => toggleDetails(task)}>Détails</button>
            <button onClick={() => onDeleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◂
        </button>
        <span>  {currentPage}  </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= tasks.length}
        >
          ▸
        </button>
      </div>
      {showModal && (
        <TaskDetailsModal task={selectedTask} onClose={closeModal} />
      )}
    </div>
  );
}

export default TaskList;