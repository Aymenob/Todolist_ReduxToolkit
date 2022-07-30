
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux/es/exports'

import React from 'react'

function Component({ checked, Title, handleClick,handleDelete }) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const deletex = { display: "grid", backgroundColor: "red", height: '0.68cm', width: '0.72cm', alignContent: 'center', justifyContent: 'center', marginTop: "0.08cm", marginRight: "0.1cm", marginLeft: "0.1cm" }
  const transform = { display: "grid", backgroundColor: "green", height: '0.68cm', width: '0.72cm', alignContent: 'center', justifyContent: 'center', marginTop: "0.08cm" }
  return (
    <div class="container5" >

      <p style={checked == true ? { textDecoration: "line-through" } : null}>{Title}</p>
      <Checkbox style={{ marginRight: "-0cm" }} size="large" name={Title} onClick={(e) => handleClick(e)} checked={checked} {...label} />
      <button name={Title} onClick={()=>handleDelete(Title)} type="button" style={deletex}>
        <i class="bi bi-trash text-light"></i>
      </button>
      <button type="button" style={transform}>
        <i class="bi bi-pencil text-light"></i>
      </button>
    </div>
  )
}

export default Component
