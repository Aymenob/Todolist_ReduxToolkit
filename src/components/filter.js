
import Component from './component'
import React from 'react'
import { useSelector } from 'react-redux/es/exports'
function Filter({handleClick,todolist,handleDelete,handleshow,handlechange}) {
    
  return (
    
    todolist.map((e,i)=>{return <Component handlechange={handlechange} show={todolist[i].show} handleshow={handleshow} handleDelete={handleDelete} handleClick={handleClick} Title={todolist[i].Title}checked={todolist[i].checked} />})
 
  )
}

export default Filter
