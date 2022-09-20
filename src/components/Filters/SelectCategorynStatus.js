import React, { useState } from 'react'

function SelectCategorynStatus(props) {


  return (
    <>
      <select className='filters_select' name="category">
        <option style={{fontWeight: 'bold'}} selected> Kategori Seçiniz</option>
        {props.categoryList?.map((ctgry, index) =>
          <option value={ctgry.id} key={index} id={ctgry.id}>{ctgry.title}</option>
        )}
      </select>
      <select className='filters_select' name="statusList"  >
      <option selected style={{fontWeight: 'bold'}}> Durum Seçiniz</option>
        {props.categoryList.map((statu) =>
          statu.statusList?.map((fi,index) =>
            <option value={fi.id} key={index}  style={{color:fi.color}} >{fi.id} {fi.text}</option>
          )

        )
        }
      </select>

    </>
  )
}

export default SelectCategorynStatus