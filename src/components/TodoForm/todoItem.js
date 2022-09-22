import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
function TodoItem(props) {
  const [checked, setChecked] = useState(false); 
  const checkedText = () => { //Checkbox tıklandığında title'ın üstü çizilir.
    
    setChecked(!checked); 
   
  }; 
  return (
    <>
      <li className="todo-item" id={props.id}>
        <div>
          <input className="todo-item-check" type='checkbox' onChange={checkedText}  />
        </div>
        <div className="todo-item-details">
          <span className={`todo-item-title ${checked? "completed": ""}`}>{props.title} </span>
          <span className="todo-item-desc">{props.desc}</span>
          <span className="todo-item-desc">{props.category}</span>
          <span className="todo-item-desc">{props.st}</span>
        </div>
        <button className="delete-btn" type="button" >
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button className="delete-btn" type="button" onClick={() =>props.handleDeleteItems(props.id)} >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
        
      </li>
    
      




    </>
  )
}

export default TodoItem