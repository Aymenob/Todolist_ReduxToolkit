import {useDispatch } from 'react-redux'
import { handlechange, handleshow, Delete, checkboxclicked } from '../slice'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'

function Component({ id, checked, Title, show}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const dispatch = useDispatch()
  return (
    <div class="container5" >
      {
      !show &&
       <input autoFocus id="Input" 
       onKeyDown={(e) => e.keyCode === 13 ? dispatch(handleshow(id)) : NaN} 
       onChange={(e) => e.target.value == "" ? alert("Your Todo is empty") : dispatch(handlechange([e.target.value,id]))} 
       value={Title}></input>
       }
      {show && <p style={checked == true ? { textDecoration: "line-through" } : null}>{Title}</p>}
      <Checkbox size="large" onClick={() => dispatch(checkboxclicked(id))} checked={checked} {...label} />

      <button onClick={() => dispatch(handleshow(id))} type="button" >
        {show && <i class="bi bi-pencil text-light"></i>}
        {!show && <i class="bi bi-plus text-light"></i>}
      </button>
      <button onClick={() => dispatch(Delete(id))} type="button" >
        <i class="bi bi-trash text-light"></i>

      </button>

    </div>
  )
}

export default Component
