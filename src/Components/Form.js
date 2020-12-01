import React from 'react';

const Form = ({inputText, setInputText,todos, setToDos}) =>{
    const inputTextHandler= (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault(); //Prevents refresh of page
        setToDos([
            ...todos,
            {text: inputText, completed: false}//did not add id value 
        ]);
    }
    return(
        <form>
            <input onChange={inputTextHandler} className="todo-input" type="text" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
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