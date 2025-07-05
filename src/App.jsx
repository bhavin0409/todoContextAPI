import React, { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import TodoFrom from './Components/TodoFrom'
import TodoItem from './Components/TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const scheduleReminder = (todoText, reminderDateTime) => {
    const reminderDate = new Date(reminderDateTime)
    const delay = reminderDate.getTime() - Date.now()
    if (delay > 0) {
      setTimeout(() => {
        if (Notification.permission === "granted") {
          new Notification("⏰ Reminder", {
            body: `Reminder for todo: ${todoText || "No todo found"}`
          })
        }else{
          Notification.requestPermission();
        }
      }, delay)
    }
  }
  const addTodo = (todo) => {
    const id = Date.now();
    setTodos((prev) => [{ id, ...todo }, ...prev])  
    scheduleReminder(todo.todo, todo.reminderDateTime)
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {
      id: prevTodo.id,
      todo: prevTodo.todo,
      completed: !prevTodo.completed
    } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, scheduleReminder, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8 px-2">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-2 sm:px-4 py-3 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoFrom />
          </div>
          <div className="flex flex-col gap-y-3 max-h-80 overflow-y-auto">
            {todos.map((todo) => (
              <div className="w-full py-1" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App