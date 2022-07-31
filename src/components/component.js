
import Checkbox from '@mui/material/Checkbox';
import React from 'react'

function Component({ id, checked, Title, handleClick, handleDelete, show, handlekeydown, handleshow, handlechange }) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div class="container5" >
      {!show && <input autoFocus={!show} id="Input" onKeyDown={(e) => handlekeydown(e, id)} onChange={(e) => handlechange(e, id)} defaultValue={Title}></input>}
      {show && <p style={checked == true ? { textDecoration: "line-through" } : null}>{Title}</p>}
      <Checkbox size="large" onClick={() => handleClick(id)} checked={checked} {...label} />

      <button onClick={() => handleshow(id)} type="button" >
        {show && <i class="bi bi-pencil text-light"></i>}
        {!show && <i class="bi bi-plus text-light"></i>}
      </button>
      <button onClick={() => handleDelete(id)} type="button" >
        <i class="bi bi-trash text-light"></i>

      </button>

    </div>
  )
}

export default Component
