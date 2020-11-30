import React from 'react';

const Form = () =>{
    return(
        <form>
            <input class="todo-input" type="text" />
            <button class="todo-button" type="submit">
                <i class="square"></i>
            </button>
            <div>
                <select name="todos" class="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}