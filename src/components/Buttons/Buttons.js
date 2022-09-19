import React from 'react'

function Buttons(props) {
  return (
    <>
    <button className="addBtn" onClick={() => props.setModalOpen(true)}>Ekle</button>
    <button className="addBtn" onClick={() => props.setCategoryModalOpen(true)}>Kategori Ekle</button>
    <button className="addBtn" onClick={() => props.setStatusModalOpen(true)}>Durum Ekle</button>
    </>
  )
}

export default Buttons