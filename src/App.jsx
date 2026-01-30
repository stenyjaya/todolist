import './App.css'
import { useState } from 'react'
const codingQuotes = [
  "Small commits lead to big success 🚀",
  "Write code. Fix bugs. Repeat.",
  "Your future is written in the code you write today.",
  "Every bug you fix makes you a better developer.",
  "Dream in logic. Build in code.",
  "First solve the problem, then write the code.",
  "Consistency in coding beats talent every time.",
  "Coffee ☕ Code 💻 Success 🚀"
]

function App() {
  const [quote, setQuote] = useState(
    codingQuotes[Math.floor(Math.random() * codingQuotes.length)]
  )
  const [toDos, setTodos] = useState([])
  const [toDo, setToDo] = useState('')

  // Add new todo
  const addTodo = () => {
    if (toDo.trim() === '') return

    setTodos([
      ...toDos,
      {
        id: Date.now(),
        text: toDo,
        status: false
      }
    ])

    setToDo('')
  }

  // Toggle completed status
  const toggleStatus = (id) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id
          ? { ...todo, status: !todo.status }
          : todo
      )
    )
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>{quote}</h2>
      </div>

      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="🖊️ Add item..."
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => toggleStatus(todo.id)}
              />
              <p className={todo.status ? 'completed' : ''}>
                {todo.text}
              </p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => deleteTodo(todo.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App