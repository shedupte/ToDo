import React,{useState,useEffect} from 'react';
import "./App.css";

//Importing Components
import Form from './Components/Form'; 
import ToDoList from './Components/ToDoList';

function App() {

  //States
  const [inputText , setInputText] = useState("");
  const [todos, setToDos]= useState([]);
  const [status, setStatus]= useState('all');
  const [filteredToDos, setFilteredToDos]=useState([]);

  //Use Effect 
  useEffect(()=> {
    filterHandler();
  }, [todos, status]);

  //Funtions
  const filterHandler = () => {
    // eslint-disable-next-line default-case
    switch(status){
      case "completed":
        setFilteredToDos(todos.filter(todo=> todo.completed ===true))
        break;
      // eslint-disable-next-line no-duplicate-case
      case "uncompleted":
        setFilteredToDos(todos.filter(todo=> todo.completed ===false))
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }

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
      setStatus={setStatus}
      
      />
      <ToDoList 
      setToDos={setToDos} 
      todos={todos}
      filteredToDos={filteredToDos}
      />
      
    </div>
  );
}

export default App;
