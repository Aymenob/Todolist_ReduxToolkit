import React from 'react'

function AddTodobar({ handleonclick, handlekeydown, handleonchange, value }) {
    return (
        <section class="container2">

            <input onKeyDown={(e) => handlekeydown(e)} placeholder='write your todo here...' value={value} onChange={(e) => handleonchange(e)}></input>
            <button onClick={(e) => handleonclick(e)}>Add Todo</button>
        </section>
    )
}

export default AddTodobar