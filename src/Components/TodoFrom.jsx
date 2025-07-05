import React, { useState } from 'react'
import { useTodo } from '../context/todoContext'

const TodoFrom = () => {
    const [todo, setTodo] = useState("")
    const [reminderDateTime, setReminderDateTime] = useState("")
    
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault();
        
        if (!todo && !reminderDateTime) {
            return;
        }

        addTodo({ todo : todo, reminderDateTime: reminderDateTime, completed : false });
        setReminderDateTime("")
        setTodo("");
        
    }
    

    return (
        <form
            className="flex flex-col gap-3 sm:flex-row sm:gap-0"
            onSubmit={add}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <input
                type="datetime-local"
                value={reminderDateTime}
                onChange={(e) => setReminderDateTime(e.target.value)}
                className="border border-black/10 rounded-lg px-3 py-1.5 outline-none duration-150 bg-white/20 sm:ml-3"
            />
            <button
                type="submit"
                className="rounded-lg px-6 py-1 bg-green-600 text-white shrink-0 mt-2 sm:mt-0 sm:ml-3"
            >
                Add
            </button>
        </form>
    )
}

export default TodoFrom