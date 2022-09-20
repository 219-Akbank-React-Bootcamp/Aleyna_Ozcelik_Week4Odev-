import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
function CategoryDenemeModal(props) {
    return (
        props.catDeleteModalOpen && (
            <div className='modal' >
                <div id="modalBody" className="modal-body">

                    <form id="todoForm" className='todoModalForm__container' >
                        <button className='close-btn' type="button" onClick={() => props.setCatDeleteModalOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        {props.categoryList?.map((ctgry) =>
                            <li className="todo-item" id={ctgry.id} >
                             
                                <div className="todo-item-details">
                                    <span className="todo-item-title">{ctgry.title} </span>
                                </div>
                                <button className="delete-btn" type="button" >
                                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                </button>
                                <button className="delete-btn" type="button" onClick={() => props.handleDeleteItems(ctgry.id)} >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>

                            </li>
                        )}

                    </form>


                </div>
            </div>
        )
    )
}

export default CategoryDenemeModal