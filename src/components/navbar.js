

import React from 'react'

function Navbar({updatesection1,updatesection2,updatesection3}) {
  return (
    <div  style={{display:"flex",justifyContent:'space-evenly'}}>
      <a  onClick={(e)=>updatesection1(e)} style={{textDecoration:'none',color:"rgb(200,211,225)",fontSize:"21px",fontWeight:"500"}} href='#'>All</a>
      <a name='Done' onClick={(e)=>updatesection2(e)} style={{textDecoration:'none',color:"rgb(200,211,225)",fontSize:"21px",fontWeight:"500"}} href='#'>Done</a>
      <a name="Undone" onClick={(e)=>updatesection3(e)} style={{textDecoration:'none',color:"rgb(200,211,225)",fontSize:"21px",fontWeight:"500"}}  href='#'>Undone</a>
      </div>
  )
}

export default Navbar





