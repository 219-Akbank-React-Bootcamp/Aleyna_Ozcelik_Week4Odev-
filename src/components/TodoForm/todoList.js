import React from 'react'
import TodoItem from '../TodoForm/TodoItem'
function TodoList(props) {
  
  
  const handleEditTodos= (editValue,selectedStatu,selectedCat,id) => 
  {
    
    const newTodosList = [...props.filteredList]
    newTodosList.forEach((todo)=>{
      
      if(todo.id === id){
       todo.title = editValue
       todo.statusList = selectedStatu     
       todo.category = selectedCat    
       }
    })
    props.setList(newTodosList)
  }
 console.log(props.filteredList)
  return (
    <div className='todoList__container' >
      <ul id="todoItems" className="todos">
      {props.list && props.list.length ? '' : 'No Tasks...'}
        {props.filteredList?.map((item, index) =>
          <TodoItem
            setList={props.setList}
            setModalOpen={props.setModalOpen}
            list={props.list}
            categoryList={props.categoryList}
            handleDeleteItems={props.handleDeleteItems}
            filteredList={props.filteredList}
            id={item.id}
            key={index}
            st={item.statusList}
            title={item.title}
            category={item.category}
            handleEditTodos={handleEditTodos}
          />
        )}

      </ul>

    </div>

  )
}

export default TodoList