import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Build a To-Do App',
    'Push to GitHub'
  ]);

  // 1. Add new state for the input field
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    if (newTodo.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, newTodo]);
    setNewTodo(''); // Clear the input box
  }

  function handleDeleteTodo(indexToDelete) {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>My React To-Do App</h1>

      {/* 2. Connect the input to the new state */}
      <input
        type="text"
        placeholder="Add a new to-do..."
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
