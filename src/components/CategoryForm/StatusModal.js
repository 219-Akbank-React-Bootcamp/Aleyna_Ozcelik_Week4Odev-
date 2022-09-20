import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function StatusModal(props) {

    const [value, setValue] = useState({

        text: props.defaultValue,
        color: props.defaultValue,

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
                    ? {
                        ...item,
                        statusList: [
                            ...item.statusList,
                            {
                                id: props.uniqueIdGenerator(),
                                text: value.text,
                                color: value.color
                            }
                        ]
                    }
                    : { ...item }
            ))
            setValue("")
       
    }

    return (
        props.statusModalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
            <div className='modal' >
                <div id="modalBody" className="modal-body">
                    <div className="split left">
                        <div className="centered">
                            {props.categoryList.map((statu) =>
                                statu.statusList?.map((fi, index) =>
                                    <li className="todo-item" id={fi.id} key={index} >
                                        <div className="todo-item-details">
                                            <span className="todo-item-title">{fi.text} </span>
                                        </div>
                                        <button className="delete-btn" type="button" >
                                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                        </button>
                                        <button className="delete-btn" type="button" onClick={() => props.handleStDelete(fi.id)} >
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </li>
                                )
                            )
                            }
                        </div>
                    </div>

                    <div className="split right">
                    <button className='close-btn' type="button" onClick={() => props.setStatusModalOpen(false)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                        <div className="centered">

                            <form id="todoForm" className='todoModalForm__container' >
                               
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
                   
                </div>
            </div>
        )
    )
}

export default StatusModal