import Component from './component'
import React from 'react'

function Filter({ handleClick, todolist, handleDelete, handleshow, handlechange,handlekeydown }) {

  return (

    todolist.map((e, i) => { return <Component id={todolist[i].id} handlechange={handlechange} show={todolist[i].show} handlekeydown={handlekeydown} handleshow={handleshow} handleDelete={handleDelete} handleClick={handleClick} Title={todolist[i].Title} checked={todolist[i].checked} /> })

  )
}

export default Filter
