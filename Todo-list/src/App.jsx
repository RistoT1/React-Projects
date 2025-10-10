import { useState, useEffect, use } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [todoColor, setTodoColor] = useState('#ffadad')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleTodoColor(color) {
    setTodoColor(color);
  }

  function handleAddTodos(newTodo, newColor) {
    const newTodoList = [...todos, { text: newTodo, color: newColor }];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit.text)
    setTodoColor(valueToEdit.color)
    handleDeleteTodo(index)
  }


  useEffect(() => {
    if (!localStorage) {
      return
    }
    let storedTodos = localStorage.getItem('todos')
    if (!storedTodos) { return }

    storedTodos = JSON.parse(storedTodos).todos
    setTodos(storedTodos)

  }, [])
  return (
    <>
      <TodoInput todoValue={todoValue} todoColor={todoColor} setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos} handleTodoColor={handleTodoColor} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
