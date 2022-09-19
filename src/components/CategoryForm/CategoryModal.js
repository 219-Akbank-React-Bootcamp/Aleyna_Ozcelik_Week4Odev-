import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function CategoryForm(props) {
  const [value, setValue] = useState({
    
    title:props.defaultValue,
  

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
        
        setValue('')
        props.setCategoryModalOpen(false)
}

  return (
    props.categoryModalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
      <div className='modal' >
        <div id="modalBody" className="modal-body">
          <form id="todoForm" className='todoModalForm__container' >
            <button className='close-btn' type="button" onClick={() => props.setCategoryModalOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
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
    )
  )
}

export default CategoryForm