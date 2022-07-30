import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    todolist:[{id:Math.random(),Title:"kiss mama on the cheek",checked:false,Done:false},{id:Math.random(),Title:"kiss papa on the cheek",checked:false,Done:false}]
}
  
  export const counterSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
      
      addTodoList:(state,action)=>
      {
        state.todolist.push(action.payload)
      },
      checkboxclicked:(state,action)=>{
      state.todolist.map(e=>e.Title===action.payload? ((e.checked=!e.checked)|(e.Done=!e.Done)):e)
      },
      Delete:(state,action)=>{
       
        state.todolist=state.todolist.filter((e)=>e.Title!==action.payload);
      }
  }
})
export const { addTodoList,increment,checkboxclicked,Delete} = counterSlice.actions

export default counterSlice.reducer