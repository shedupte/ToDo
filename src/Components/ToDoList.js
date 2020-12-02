import React from 'react';
//Import component
import ToDo from './ToDo';

const ToDoList = ({todos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map(todos=> (
                <ToDo text={todos.text}/>
            ))}
            </ul>
        </div>
    );
}

export default ToDoList;