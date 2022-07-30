

import React from 'react'

function Navbar({updatesection1,updatesection2,updatesection3}) {
  return (
    <div style={{display:"flex",justifyContent:'space-evenly'}}>
      <a  onClick={()=>updatesection1()} style={{textDecoration:'none',color:"white",fontSize:"21px",fontWeight:"500"}} href='#'>All</a>
      <a name='Done' onClick={()=>updatesection2()} style={{textDecoration:'none',color:"white",fontSize:"21px",fontWeight:"500"}} href='#'>Done</a>
      <a name="Undone" onClick={()=>updatesection3()} style={{textDecoration:'none',color:"white",fontSize:"21px",fontWeight:"500"}}  href='#'>Undone</a>
      </div>
  )
}

export default Navbar





