import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';


function CategoryForm(props) {

  const [value, setValue] = useState({
    title: props.defaultValue,
  })
  const handleCategoryChange = (event) => {
    //console.log(event.currentTarget.name)
    setValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  const handleClick = () => {
    props.handleAddCategory(value)
   
  }
  return (
    props.categoryModalOpen && (
      <div className='modal' >
        <div id="modalBody" className="modal-body">
          <div className="split left">
            <div className="centered">
              {props.categoryList?.map((ctgry,index) =>
                <li className="todo-item" id={ctgry.id} key={index}>
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
            </div>
          </div>

          <div className="split right">
            <button className='close-btn' type="button" onClick={() => props.setCategoryModalOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="centered">
              <form id="todoForm" className='todoModalForm__container' >
                <input
                  name="title"
                  type="text"
                  className="form-control input"
                  placeholder="Add Category"
                  value={value.title}
                  onChange={handleCategoryChange}
                  autoComplete="off"
                />
                <button
                  className="save-btn"
                  type="button"
                  onClick={handleClick}
                >Ekle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default CategoryForm