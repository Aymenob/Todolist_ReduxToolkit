import logo from './logo.svg';
import './App.css';
import { createSlice } from '@reduxjs/toolkit';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodoList,checkboxclicked,Delete} from './slice';
import Filter from './components/filter';
import Navbar from './components/navbar';
function App() {
  const dispatch=useDispatch()
  const todolist=useSelector((state)=>state.counter.todolist);
  const [Typed,updateTyped]=useState("")
  const [section,updatesection]=useState("")

  
  
  return (
    <div class="container1"> 
    <section class="container2">
    
    <input  onKeyDown={(e)=>e.keyCode==13? dispatch(addTodoList({id:Math.random(),Title:Typed,checked: false, Done: false}))&&updateTyped(""):NaN} placeholder='write your todo here...'  style={{textAlign:"center",borderRadius:"7px"}} value={Typed} onChange={(e)=>updateTyped(e.target.value)}></input>
    <button style={{borderRadius:"7px"}}  onClick={(e)=>dispatch(addTodoList({id:Math.random(),Title:Typed,checked: false, Done: false}))&&updateTyped("")}>Add Todo</button>
    </section>
    <div class="container3">
    <Navbar updatesection1={(e)=>updatesection("")} updatesection2={(e)=>updatesection(e.target.name)} updatesection3={(e)=>updatesection(e.target.name)}/>
    </div>
    <div class="container4" >
    <Filter handleDelete={(Title)=>dispatch(Delete(Title))} todolist={section==="Done"?todolist.filter(e=>e.Done===true):section==="Undone"?todolist.filter(e=>e.Done===false):section===""?todolist:todolist} handleClick={(e)=>dispatch(checkboxclicked(e.target.name))}/>
    </div>
    </div>
  );
}

export default App;


