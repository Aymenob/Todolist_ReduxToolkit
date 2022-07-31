import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  todolist: [{ id: Math.random(), Title: "drink coffee!", checked: false, Done: false, show: true }]
}

export const counterSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {

    addTodoList: (state, action) => {
      state.todolist.push(action.payload)
    },
    checkboxclicked: (state, action) => {
      state.todolist.map(e => e.id === action.payload ? ((e.checked = !e.checked) | (e.Done = !e.Done)) : e)
    },
    Delete: (state, action) => {

      state.todolist = state.todolist.filter((e) => e.id !== action.payload);
    },
    handleshow: (state, action) => {
      state.todolist.map(e => e.id === action.payload ? e.show = !e.show : e);

    },
    handlechange: (state, action) => {
      state.todolist.map(e => e.id === action.payload[1] ? e.Title = action.payload[0] : e)
    }

  }
})
export const { addTodoList, increment, checkboxclicked, Delete, handleshow, handlechange } = counterSlice.actions

export default counterSlice.reducer