import React from 'react'
import TodoItem from '../TodoForm/todoItem'
function todoList(props) {
  return (
    <div className='todoList__container'>
     <ul id="todoItems" className="todos">
       {props.list?.map((item,index)=>
        <TodoItem handleDeleteItems={props.handleDeleteItems} id={item.id} key={index} title={item.title} desc={item.desc}/>
       )}
       
    </ul>
   
   </div>
    
  )
}

export default todoList