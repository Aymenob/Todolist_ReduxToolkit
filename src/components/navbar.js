
import { useDispatch } from 'react-redux'
import React from 'react'
import { handlesection } from '../slice2'
function Navbar() {
  
  const dispatch = useDispatch()
  
  return (
    <div class="container3">
      <div>
        <a onClick={() => dispatch(handlesection("All"))} href='#'>All</a>
        <a name='Done' onClick={() => dispatch(handlesection("Done"))} href='#'>Done</a>
        <a name="Undone" onClick={() => dispatch(handlesection("Undone"))} href='#'>Undone</a>
      </div>
    </div>
  )
}

export default Navbar






