import React from 'react';
//Import component
import ToDo from './ToDo';

const ToDoList = ({todos,setToDos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map(todo=> (
                <ToDo 
                todos={todos} 
                setToDos={setToDos} 
                key={todo.id} 
                todo={todo}
                text={todo.text}
                />
            ))}
            </ul>
        </div>
    );
}

export default ToDoList;