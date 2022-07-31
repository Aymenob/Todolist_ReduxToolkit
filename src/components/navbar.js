

import React from 'react'

function Navbar({updatesection1,updatesection2,updatesection3}) {
  return (
    <div >
      <a  onClick={()=>updatesection1()}  href='#'>All</a>
      <a name='Done' onClick={()=>updatesection2()}  href='#'>Done</a>
      <a name="Undone" onClick={()=>updatesection3()}   href='#'>Undone</a>
      </div>
  )
}

export default Navbar





