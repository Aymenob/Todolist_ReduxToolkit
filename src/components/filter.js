
import Component from './component'
import React from 'react'
import { useSelector } from 'react-redux/es/exports'
function Filter({handleClick,todolist,handleDelete}) {
    
  return (
    
    todolist.map((e,i)=>{return <Component handleDelete={handleDelete} handleClick={handleClick} Title={todolist[i].Title}checked={todolist[i].checked} />})
 
  )
}

export default Filter
