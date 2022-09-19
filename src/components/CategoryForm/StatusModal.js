import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function StatusModal(props) {
    const [value, setValue] = useState({
        
        text: props.defaultValue,
       
    })
    const handleStatusChange = (event) => {
        //console.log(event.currentTarget.name)
        setValue((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    const handleClick = () => {
        props.handleAddStatus(
            props.categoryList.map((statu)=>
            {  if (statu.id == value.category) {
               statu.statusList.push(value)
            }}
            ))
            setValue('')
            props.setStatusModalOpen(false)
    }
    return (
        props.statusModalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
            <div className='modal' >
                <div id="modalBody" className="modal-body">

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

export default StatusModal