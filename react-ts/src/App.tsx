import React, {FC} from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export interface ITodo {
  todos: string 
}

const App: FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<string[]>([])

  const getTodo = (todoInput:string):void => {
    setTodo(todoInput)
  }
  
  const addTodo = ():void => {
    setTodoList([...todoList, todo])
    setTodo("")  
  }

  const deleteTodo =(todoName:string):void => {
    setTodoList(todoList.filter((todo) => {
      return todo !== todoName
    }
    ))
  } 

  
  return (
    <div className="App">
      <Header title = "Todo" color="blue" />
      <TodoInput todo={todo} getTodo={getTodo} addTodo={addTodo} />
      <div>
        {todoList.map((todo:string, key:number) => {
             return  <TodoList key={key} todo={todo} deleteTodo = {deleteTodo}/>
        })}
      </div>
    </div>
  )
}
export default App; 
