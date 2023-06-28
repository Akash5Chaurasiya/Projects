import React, { useRef } from 'react'
import './styles.css'
interface Props{
    todo: string
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}
const InputFiels:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef=useRef<HTMLInputElement>(null)
  return <form onSubmit={(e)=>{handleAdd(e) ; inputRef.current?.blur()}} className="input">
    <input ref={inputRef} type="input" placeholder='Enter task' value={todo} onChange={(e)=>setTodo(e.target.value)} className='input_box' />
    <button className="input_submit" type='submit'>Go</button>
  </form>
}

export default InputFiels