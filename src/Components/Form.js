import React from 'react';

const Form = () =>{
    return(
        <form>
            <input className="todo-input" type="text" />
            <button className="todo-button" type="submit">
                <i className="square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}

export default Form;