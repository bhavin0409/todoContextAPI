import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            reminderDateTime: "2025-01-01T00:00",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    scheduleReminder: (todoText , reminderDateTime) => {},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id , todo) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider