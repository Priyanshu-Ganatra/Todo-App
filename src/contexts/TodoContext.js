import { createContext, useContext } from 'react';
const TodoContext = createContext({
    todos: [
        {
            // id: 1,
            // todo: 'todo msg',
            // completed: false
        }
    ],
    // these are just the placeholders and the actual values will be replaced by the values passed to the TodoProvider
    addTodo: (todo) => { }, 
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});
export const useTodo = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider