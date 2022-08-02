import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    value: "",
}

export const counterSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        handlesection: (state, action) => {
            state.value = action.payload
        }

    }
})
export const { handlesection } = counterSlice.actions

export default counterSlice.reducer