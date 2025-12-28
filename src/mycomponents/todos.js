
import React from 'react'
import TodoItem from './todoitem';

const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" m-y='3' style={mystyle}>
      <h3 className=" my-3">Todos List</h3>

    {props.todos.length===0? <p className="empty-todos">
  No todos yet. Add one above 👆
</p> :

  props.todos.map((todo)=>{
    return (
    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
    )
  })
  }

    </div>
  )
}


export default Todos

