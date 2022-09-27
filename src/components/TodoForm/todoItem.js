import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false)
  const [editValue, setEditValue] = useState(props.title)
  const checkedText = () => { //Checkbox tıklandığında title'ın üstü çizilir.

    setChecked(!checked);

  };

  const handleCategoryChange = (event) => {
    //console.log(event.currentTarget.name)

    props.setList(props.list.map((ctgry) =>
      ctgry.category !== event.target.value
        ? { ...ctgry, category: event.target.value }
        : { ...ctgry }
    ))
    console.log(props.list)

  }
  const handleStatusListChange = (event) => {
    //console.log(event.currentTarget.name)

    props.setList(props.list.map((ctgry) =>
      ctgry.statusList !== event.target.value
        ? { ...ctgry, statusList: event.target.value }
        : { ...ctgry }
    ))
    console.log(props.list)

  }

  const handleSave = () => {
    setEdit(false)
    if (editValue) {
      props.handleEditTodos(editValue, props.id)
    } else {
      setEditValue(props.title)
    }
  }

  const handleOnEdit = () => {
    setEdit(true)

  }


  return (
    <>
      <li className="todo-item" id={props.id}>
        <div>
          <input
            className="todo-item-check"
            type='checkbox'
            onChange={checkedText} />
        </div>
        <div className="todo-item-details">

          {edit ?
            (
              <input
                type="text"
                name='editValue'
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)} />
            ) : (
              <span
                className={`todo-item-title ${checked ? "completed" : ""}`}
              >{props.title}</span>
            )
          }

        </div>
        {/* SELECT CATEGORY */}
        <select
          className='filters_select'
          name="category"
          onChange={handleCategoryChange}>

          {
            props.categoryList.map((ctgry, index) =>
              <option
                value={ctgry.title}
                key={index}
                id={ctgry.id}>
                {ctgry.title}
              </option>
            )}

        </select>
        {/* SELECT STATUS */}

        <select
          className='filters_select'
          name="statusList"
          onChange={handleStatusListChange}>

          {
            props.categoryList.map((statu) =>
              statu.statusList?.map((fi, index) =>
                <option
                  value={fi.text}
                  id={fi.id}
                  key={index}
                  style={{ color: fi.color }}>
                  {fi.text}
                </option>
              ))
          }

        </select>
        {
          edit ? (
            <button
              className="delete-btn"
              type="button"
              onClick={() => handleSave(props.id)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          )
            :
            (
              <button
                className="delete-btn"
                type="button"
                onClick={handleOnEdit}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            )
        }

        <button
          className="delete-btn"
          type="button"
          onClick={() => props.handleDeleteItems(props.id)} >
          <FontAwesomeIcon icon={faTrash} />
        </button>

      </li>
    </>
  )
}

export default TodoItem