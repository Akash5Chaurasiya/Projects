import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFiels from './components/InputFiels';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>('')
  const [todos,setTodos]=useState<Todo[]>([])
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo('')
    }
  }
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFiels todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
