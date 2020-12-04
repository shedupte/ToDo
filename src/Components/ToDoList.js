import React from 'react';
//Import component
import ToDo from './ToDo';

const ToDoList = ({todos,setToDos,filteredToDos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
            {filteredToDos.map(todo=> (
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