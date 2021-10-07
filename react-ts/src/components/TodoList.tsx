import React,{FC} from 'react'
import { ITodo } from '../App'

interface Props {
    todo:string
    deleteTodo:Function
} 


const TodoList = (props:Props) => {

    const handleDelete = () => {
        props.deleteTodo(props.todo)
    }
    
    return (
        <div>
            <li>
                 {props.todo}  
                 <button onClick={handleDelete}> x</button>
            </li>            
        </div>
    )
}

export default TodoList
