import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodoList} from '../slice'
function AddTodobar() {
    const [Typed, updateTyped] = useState("")
    const dispatch=useDispatch()
    
    return (
        <section class="container2">
            <input onKeyDown={((e) => e.keyCode === 13 ? Typed === "" ? alert("your todo is empty") : dispatch(addTodoList({ id: Math.random(), Title: Typed, checked: false, Done: false, show: true })) && updateTyped("") : NaN)} placeholder='write your todo here...' value={Typed} onChange={(e) => updateTyped(e.target.value)}></input>
            <button onClick={(e) => Typed === "" ? alert("your todo is empty") : dispatch(addTodoList({ id: Math.random(), Title: Typed, checked: false, Done: false, show: true })) && updateTyped("")}>Add Todo</button>
        </section>
    )
}

export default AddTodobar
