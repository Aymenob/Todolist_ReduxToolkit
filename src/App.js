
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodoList, checkboxclicked, Delete, handlechange, handleshow } from './slice';
import Filter from './components/filter';
import Navbar from './components/navbar';
import AddTodobar from './components/AddTodobar';

function App() {
  const dispatch = useDispatch()
  const todolist = useSelector((state) => state.counter.todolist);
  const [Typed, updateTyped] = useState("")
  const [section, updatesection] = useState("")


  return (

    <div  class="container1">
      <AddTodobar value={Typed} handleonchange={(e) => updateTyped(e.target.value)} handlekeydown={(e) => e.keyCode === 13 ? Typed === "" ? alert("your todo is empty") : dispatch(addTodoList({ id: Math.random(), Title: Typed, checked: false, Done: false, show: true })) && updateTyped("") : NaN} handleonclick={(e) => Typed === "" ? alert("your todo is empty") : dispatch(addTodoList({ id: Math.random(), Title: Typed, checked: false, Done: false, show: true })) && updateTyped("")} />
      <div class="container3">
        <Navbar updatesection1={() => updatesection("")} updatesection2={(e) => updatesection("Done")} updatesection3={(e) => updatesection("Undone")} />
      </div>
      <div class="container4" >
        <Filter handlechange={(e, id) =>e.target.value==""? alert("Your Todo is empty"):dispatch(handlechange([e.target.value, id]))} handleshow={(id) => dispatch(handleshow(id)) && ("Input").current.focus()} handlekeydown={(e, id) => e.keyCode === 13 ? dispatch(handleshow(id)) : NaN} handleDelete={(id) => dispatch(Delete(id))} todolist={section === "Done" ? todolist.filter(e => e.Done === true) : section === "Undone" ? todolist.filter(e => e.Done === false) : section === "" ? todolist : todolist} handleClick={(id) => dispatch(checkboxclicked(id))} />
      </div>
    </div>

  );
}

export default App;


