import React,{useState} from 'react';
import "./App.css";

//Importing Components
import Form from './Components/Form'; 
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText , setInputText] = useState("");
  return (
    <div className="App">
      <header>
      <h1>Tenzin's ToDo list {inputText} </h1>
      </header>
      <Form setInputText={setInputText}/>
      <ToDoList/>
      
    </div>
  );
}

export default App;
