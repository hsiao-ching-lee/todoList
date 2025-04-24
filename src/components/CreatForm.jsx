import { useState } from "react"

export default function CreatForm({addTodo}) {
  
  const [todo, setTodo] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    addTodo(todo)
    setTodo('')
  }

  return (
    <form className="creat-form" 
    onSubmit={handleSubmit}>
    
      <input 
      type="text" placeholder="輸入代辦事項"
      value={todo}
      onChange={(e)=>{
        setTodo(e.target.value)
      }}
       />
      <button type="submit"
      >新增</button>
    </form>
  )
}