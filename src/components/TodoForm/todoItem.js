import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false)
  const [editValue, setEditValue] = useState(props.title)
  const [selectedStatu, setSelectedStatu] = useState(props.st)
  const [selectedCat, setSelectedCat] = useState(props.category)

  const checkedText = () => { //Checkbox tıklandığında title'ın üstü çizilir.

    setChecked(!checked);

  };
  const handleSave = () => {
    setEdit(false)
    if (editValue ,selectedStatu ,selectedCat) {
      props.handleEditTodos(editValue,selectedStatu,selectedCat, props.id)
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
                className='editItemInput'
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
        {edit ?
          (<select
            className='filters_select '
            name="category"
            id="selectCategoryList"
            style={{height:"20px",top:"0px"}}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            <option selected> Kategori Seçiniz</option>
            {
              props.categoryList.map((ctgry, index) =>
                <>
                  <option
                    value={ctgry.id}
                    key={index}
                    id={ctgry.id}>
                    {ctgry.title}
                  </option>
                </>
              )}

          </select>
          ) :
          (<span className='catNstatu'>Kategori : <span style={{ color: "#e77461" }}> 
        
          {props.category}</span></span>)
        }
        {edit ? (<select
          className='filters_select'
          name="statusList"
          id="selectStatusList"
          style={{height:"20px",top:"0px"}}
          onChange={(e) => setSelectedStatu(e.target.value)}>
          <option> Durum Seçiniz</option>
          {
            props.categoryList.map((statu) =>
              statu.statusList?.map((fi, index) =>
                <option
                  value={fi.id}
                  id={fi.id}
                  key={index}
                  style={{ color: fi.color }}>
                  {fi.text}
                </option>
              ))
          }

        </select>)
          : (
            <span className='catNstatu'>Durum : <span style={{ color: "#e77461", fontWeight: "600" }}> {props.st}</span></span>
          )
        }
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