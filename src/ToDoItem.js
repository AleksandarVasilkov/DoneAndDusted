import React from 'react';

function ToDoItem({ task, onDelete }) {
  return (
    <div>
      {task}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ToDoItem;
