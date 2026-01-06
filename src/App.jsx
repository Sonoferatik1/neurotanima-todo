import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <div className="glitch-wrapper">
          <h1 className="title glitch" data-text="NEURAL_TASKS">NEURAL_TASKS</h1>
        </div>

        <div className="terminal-line">
          <span className="prompt">{'>'}</span>
          <span className="path">~/mind/tasks</span>
          <span className="cursor">_</span>
        </div>

        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="initialize.new.task()"
              className="todo-input"
            />
            <button type="submit" className="submit-btn">
              <span className="btn-text">EXECUTE</span>
              <span className="btn-glitch">EXECUTE</span>
            </button>
          </div>
        </form>

        <div className="todos-container">
          <div className="section-header">
            <span className="header-bracket">{'['}</span>
            <span className="header-text">ACTIVE_PROCESSES</span>
            <span className="header-bracket">{']'}</span>
            <span className="header-count">{todos.length}</span>
          </div>

          <ul className="todos-list">
            {todos.map((todo) => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-checkbox" onClick={() => toggleTodo(todo.id)}>
                  <div className="checkbox-inner">
                    {todo.completed && <span className="check">✓</span>}
                  </div>
                </div>
                <span className="todo-text">{todo.text}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                  title="Terminate process"
                >
                  <span className="delete-x">×</span>
                </button>
              </li>
            ))}
          </ul>

          {todos.length === 0 && (
            <div className="empty-state">
              <div className="empty-text">
                <span className="empty-bracket">{'{'}</span>
                <span>NO_ACTIVE_PROCESSES</span>
                <span className="empty-bracket">{'}'}</span>
              </div>
              <div className="empty-subtext">system.idle()</div>
            </div>
          )}
        </div>

        <div className="footer">
          <div className="status-bar">
            <span className="status-item">STATUS: <span className="status-active">ONLINE</span></span>
            <span className="status-separator">|</span>
            <span className="status-item">SYNC: <span className="status-warning">LOCAL_ONLY</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
