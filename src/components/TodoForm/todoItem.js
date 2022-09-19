import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
function todoItem(props) {
  return (
    <>
      <li className="todo-item" id={props.id}>
        <div>
          <input className="todo-item-check" type='checkbox' />
        </div>
        <div className="todo-item-details">
          <span className="todo-item-title">{props.title} </span>
          <span className="todo-item-desc">{props.desc}</span>

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

export default todoItem