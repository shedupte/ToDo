import React,{useState} from 'react';
import "./App.css";

//Importing Components
import Form from './Components/Form'; 
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText , setInputText] = useState("");
  const [todos, setToDos]= useState([]);
  return (
    <div className="App">
      <header>
      <h1>Tenzin's ToDo list</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setToDos={setToDos} 
      setInputText={setInputText}
      />
      <ToDoList setToDos={setToDos} todos={todos}/>
      
    </div>
  );
}

export default App;
