import Component from './component'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function Filter() {
  const todolist = useSelector(state => state.counter.todolist); console.log(todolist)
  const Section = useSelector(state => state.section.value)

  return (
    <div class="container4" >
      {
        Section === "Undone" ?
          todolist.filter(e => e.Done == false).map((e, i) => <Component id={e.id} show={e.show} Title={e.Title} checked={e.checked} />)
          :
          Section === "Done" ?
            todolist.filter(e => e.Done == true).map((e, i) => <Component id={e.id} show={e.show}  Title={e.Title} checked={e.checked} />)
            :
            
              todolist.map((e, i) => <Component id={e.id} show={e.show}  Title={e.Title} checked={e.checked} />)
              
      }
    </div>
  )
}

export default Filter
