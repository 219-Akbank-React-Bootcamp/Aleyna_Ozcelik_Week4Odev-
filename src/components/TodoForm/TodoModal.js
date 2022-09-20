import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const TodoModal = (props) => {

    const [value, setValue] = useState({
        title: props.defaultValue,
        desc: props.defaultValue,
    })

    const handleChange = (event) => {
        setValue((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    const handleClick = () => {
        props.handleAddTodo(value)
        props.setModalOpen(false)
    }

    return (

        props.modalOpen && ( //Eğer modalopen True ise modal göstericek , False ise gösterilmicek.
            <div className='modal' >
                <div id="modalBody" className="modal-body">
                    <form id="todoForm" className='todoModalForm__container' >
                        <button className='close-btn' type="button" onClick={() => props.setModalOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <input
                            name="title"
                            onChange={handleChange}
                            value={value.title}
                            type="text"
                            className="form-control input"
                            placeholder="Title"
                            autoComplete="off"
                        />
                        <textarea
                            name="desc"
                            type="text"
                            value={value.desc}
                            onChange={handleChange}
                            className="form-control textarea"
                            placeholder="Description"
                        >
                        </textarea>

                        <select className='addCategory' name="category"
                            onChange={handleChange} >
                            <option selected> Kategori Seçiniz</option>
                            {props.categoryList?.map((ctgry, index) =>
                                <option value={ctgry.id} key={index} id={ctgry.id}>{ctgry.title}</option>
                            )}

                        </select>
                        <select className='addCategory' name="statusList" onChange={handleChange} >
                            {
                                props.categoryList.map((statu) => {
                                    if (statu.id == value.category) {
                                        return statu.statusList?.map((fi, index) =>
                                            <option value={fi.id} key={index} id={fi.id}>{fi.text}</option>
                                        )
                                    }
                                })
                            }
                        </select>
                        <button
                            className="save-btn"
                            type='button'
                            onClick={handleClick}
                        >Ekle
                        </button>

                    </form>
                </div>
            </div>
        )

    )

}

export default TodoModal