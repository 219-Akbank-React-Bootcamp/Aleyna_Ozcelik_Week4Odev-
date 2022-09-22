import React from 'react'
import TodoItem from '../TodoForm/TodoItem'
function TodoList(props) {
  return (
    <div className='todoList__container'>
     <ul id="todoItems" className="todos">
       {props.filteredList?.map((item,index)=>
        <TodoItem handleDeleteItems={props.handleDeleteItems} id={item.id} key={index} st={item.statusList} title={item.title} desc={item.desc} category={item.category} />
       )}
       
    </ul>
   
   </div>
    
  )
}

export default TodoList