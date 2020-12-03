import React from 'react';

const ToDo= ({text,todo,todos,setToDos}) => {
    const deleteHandler = () =>{
        setToDos(todos.filter((el)=> el.id !== todo.id));
    };
    return(
        <div className="todo">
            <li className="todo-item"> {text}</li>
            <button className="check"></button>
            <button onClick={deleteHandler} className="trash"></button>
        </div>
    );
}

export default ToDo; 