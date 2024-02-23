import React, { useState } from 'react';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input.trim(), completed: false }]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };
  

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
  <header className="App-header">
    <h1>Done and Dusted</h1>
    <h2>A simple to-do list tool by <a href="https://www.linkedin.com/in/aleksandarvasilkov/" target="_blank" title="Get in touch with Aleksandar on LinkedIn">Aleksandar Vasilkov</a></h2>

    <div className="input-wrapper"> {/* Add this wrapper */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
    </div>
    {tasks.map((task, index) => (
  <div className="task-item" key={index}>
    <span className={`task-text ${task.completed ? 'completed' : ''}`}>
      {task.text}
    </span>
    <div className="task-actions">
      <button onClick={() => toggleComplete(index)}>Done</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  </div>
))}
  </header>
</div>

  );
}

export default App;
