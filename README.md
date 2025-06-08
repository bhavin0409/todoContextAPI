
# Components

### `Components/TodoFrom.jsx`
- **Purpose:**  
  Renders a form for adding new todos.
- **How it works:**  
  - Uses local state to manage the input value.
  - On form submit, calls `addTodo` from context to add a new todo to the list.
  - Clears the input after adding.

### `Components/TodoItem.jsx`
- **Purpose:**  
  Displays a single todo item with options to edit, mark as completed, or delete.
- **How it works:**  
  - Shows a checkbox to toggle completion.
  - Allows editing the todo text (unless completed).
  - Provides a delete button to remove the todo.
  - Uses context functions: `updateTodo`, `deleteTodo`, `toggleTodo`.

---

## Context

### `context/todoContext.js`
- **Purpose:**  
  Provides a React Context for managing todos and related actions.
- **How it works:**  
  - Exports `TodoContext`, `TodoProvider`, and `useTodo` hook.
  - The context holds the todos array and functions to add, update, delete, and toggle todos.
  - Allows components to access and modify the todo list from anywhere in the component tree.

### `context/index.js`
- **Purpose:**  
  Re-exports context utilities for easier imports.

---

## App Component

### `App.jsx`
- **Purpose:**  
  The main application component.
- **How it works:**  
  - Manages the todos state and all todo-related logic (add, update, delete, toggle).
  - Persists todos to `localStorage` and loads them on startup.
  - Provides the todo context to all child components.
  - Renders the main UI, including the todo form and the list of todo items.

---

## Summary

- **`Components/`**: UI for adding and displaying todos.
- **`context/`**: Centralized state and actions for todos, accessible via React Context.
- **`App.jsx`**: Main logic and state management, context provider, and UI composition.

This structure keeps logic and UI separate, and uses React Context for clean state sharing across components.