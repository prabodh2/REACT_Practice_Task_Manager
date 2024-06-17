import React, { useState } from 'react';

const TaskForm = ({ addTask, currentTask, updateTask }) => {
  const [text, setText] = useState(currentTask ? currentTask.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask({ ...currentTask, text });
    } else {
      addTask({ id: Date.now(), text });
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">{currentTask ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
