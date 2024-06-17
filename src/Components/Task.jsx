import React from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => onUpdate(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
