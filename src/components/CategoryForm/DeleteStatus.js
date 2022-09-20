import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faPen, faTrash,faXmark  } from '@fortawesome/free-solid-svg-icons';
function DeleteStatus(props) {
  return (
    props.stDeleteModalOpen && (
        <div className='modal' >
            <div id="modalBody" className="modal-body">
        <form id="todoForm" className='todoModalForm__container' >
        <button className='close-btn' type="button" onClick={() => props.setStDeleteModalOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
        {props.categoryList.map((statu) =>
          statu.statusList?.map((fi,index) =>
          <li className="todo-item" id={fi.id} >
        
          <div className="todo-item-details">
              <span className="todo-item-title">{fi.text} </span>
          </div>
          <button className="delete-btn" type="button" >
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </button>
          <button className="delete-btn" type="button" onClick={() => props.handleStDeleteItems(fi.id)} >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>

      </li>
          )

        )
        }
      


    </form>
   
              
            </div>
        </div>
    )
  )
}

export default DeleteStatus