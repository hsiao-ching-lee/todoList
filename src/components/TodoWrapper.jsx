import CreatForm from './CreatForm'
import Todo from './Todo'
import  './TodoWrapper.css'


import { useState } from 'react'
export default function TodoWrapper() {
  const [editId, setEditId] = useState(null)
  const [todos, setTodos] = useState([
    {todo:'買牛奶', id:Math.random() ,isCompleted:false
    },
    {todo:'買蛋', id:Math.random(),isCompleted:false},
  ])
  const handleDelete=(id)=>{
    const newTodos = todos.filter((item)=>item.id !== id)
    setTodos(newTodos)
  }

  const addTodo=(todo)=>{
    setTodos([ {todo,id:Math.random(),isCompleted:false},...todos])
  }

  const handleEdit=(id)=>{
    setEditId(id)
  }

  const handleChange=(id,todo)=>{
    const newTodos = todos.map((item)=>{
      if(item.id == id){
        return{...item,todo}
      }
      return item
    })
    setTodos(newTodos)
  }

  const handleComplete=(id)=>{
    const newTodos = todos.map((item)=>{
      if(item.id == id){
        return({...item,isCompleted:!item.isCompleted})
      }
      return item
    }).sort((a, b) => a.isCompleted - b.isCompleted)
    setTodos(newTodos)
    
    
  }



  return (
    <div className="todo-wrapper">
      <h1>代辦事項</h1>
      <CreatForm addTodo={addTodo}/>
      <div className="todo-list">
        <Todo 
        todos={todos} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
        editId={editId}
        handleChange={handleChange}
        handleComplete={handleComplete}
        />
      </div>
    </div>
  )
}