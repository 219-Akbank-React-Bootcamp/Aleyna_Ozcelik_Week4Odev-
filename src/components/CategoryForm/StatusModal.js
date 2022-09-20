import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function StatusModal(props) {

    const [value, setValue] = useState({
        
        text: props.defaultValue,
        color:props.defaultValue,
       
    })
    const handleStatusChange = (event) => {
        //console.log(event.currentTarget.name)
        setValue((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    const handleAddStatus = () => {
        props.setCategoryList(
          props.categoryList.map((item) => 
          item.id == value.category
          ?{
            
            ...item,
            statusList:[
                ...item.statusList,
            {
                id:props.uniqueIdGenerator(),
                text:value.text, 
                color:value.color
            }
            ]
           }
          :{...item}
          ))
          setValue('')
          props.setStatusModalOpen(false)
      }
  
    return (
        props.statusModalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
            <div className='modal' >
                <div id="modalBody" className="modal-body">
                <div className="deleteCat">
                <button className="save-btn "onClick={() =>  props.setStDeleteModalOpen(true)? props.setCategoryModalOpen(true):props.setStatusModalOpen(false)}>Kategori Sil</button>
            </div>
                    <form id="todoForm" className='todoModalForm__container' >
                        <button className='close-btn' type="button" onClick={() => props.setStatusModalOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <select className='addCategory' name="category" onChange={handleStatusChange}>
                            <option style={{ fontWeight: 'bold' }} selected> Kategori Seçiniz</option>
                            {props.categoryList.map((ctgry, index) =>
                                <option value={ctgry.id} key={index} id={ctgry.id}>{ctgry.title}</option>
                            )}

                        </select>
                        <input
                            name="text"
                            type="text"
                            className="form-control input"
                            placeholder="Add status"
                            autoComplete="off"
                            value={value.text}
                            onChange={handleStatusChange}
                        />
                         <input
                            name="color"
                            type="text"
                            className="form-control input"
                            placeholder="Add color"
                            autoComplete="off"
                            value={value.color}
                            onChange={handleStatusChange}
                        />
                        <button
                            className="save-btn"
                            type="button"
                            onClick={handleAddStatus}
                        >Ekle
                        </button>

                    </form>
                </div>
            </div>
        )
    )
}

export default StatusModal