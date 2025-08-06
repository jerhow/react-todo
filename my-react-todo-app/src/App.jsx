import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Build a To-Do App',
    'Push to GitHub'
  ]);

  return (
    <div>
      <h1>My React To-Do App</h1>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
