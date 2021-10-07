import React,{FC,ChangeEvent} from 'react'


export interface Props {
    getTodo : Function
    addTodo : Function
    todo : string
  }

const TodoInput = (props:Props) => {

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        props.getTodo(e.target.value)
    }
    
    const handleSubmit = (e:ChangeEvent<HTMLFormElement>):void => {
        e.preventDefault()
        props.addTodo()
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Enter Todo" value={props.todo} name="todo" onChange={handleChange}/> 
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoInput
