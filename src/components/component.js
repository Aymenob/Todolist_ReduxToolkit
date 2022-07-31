
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux/es/exports'

import React from 'react'

function Component({id, checked, Title, handleClick, handleDelete, show,handleshow,handlechange }) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const deletex = { display: "grid", backgroundColor: "red", height: '0.68cm', width: '0.72cm', alignContent: 'center', justifyContent: 'center', marginTop: "0.08cm", marginRight: "0.1cm", marginLeft: "0.1cm" }
  const transform = { display: "grid", backgroundColor: "green", height: '0.68cm', width: '0.72cm', alignContent: 'center', justifyContent: 'center', marginTop: "0.08cm" }
  return (
    <div class="container5" >

      {!show && <input onChange={(e)=>handlechange(e,id)} class="modifier" defaultValue={Title}></input>}
      {show && <p style={checked == true ? { textDecoration: "line-through" } : null}>{Title}</p>}
      <Checkbox style={{ marginRight: "-0cm" }} size="large"  onClick={() => handleClick(id)} checked={checked} {...label} />
      <button  onClick={() => handleDelete(id)} type="button" style={deletex}>
        <i class="bi bi-trash text-light"></i>
      </button>
      <button   onClick={()=>handleshow(id)} type="button" style={transform}>
        <i class="bi bi-pencil text-light"></i>
      </button>

    </div>
  )
}

export default Component
