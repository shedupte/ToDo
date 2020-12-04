import React from 'react';

const Form = ({inputText, setInputText,todos, setToDos,setStatus}) =>{
    const inputTextHandler= (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault(); //Prevents refresh of page
        setToDos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}//new id value added

        ]);
        setInputText("");
    }
    const statusHandler= (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button> 
            <div className="select">
                <select onChange={statusHandler}  name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}

export default Form;