import React from 'react';
import Add from './components/AddToDo'
import List from './components/TodoList'
import {Container} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
     <header class="todo-header">
       <center>
				  <h2>To Do List</h2>
          </center>
          <Add/>  
        </header>
      <Container className="all-todo">  
      <div>
        <List/>
        </div>
      </Container>
  
    </div>
  );
}

export default App;
