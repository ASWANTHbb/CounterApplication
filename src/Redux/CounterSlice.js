import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice=createSlice({
 name:'Counter',
 initialState:{
    value:0
 },

 reducers:{
    increment : (state)=>{
        state.value+=1
    },
    decrement : (state)=>{
        state.value-=1
    },
    reset : (state)=>{
        state.value=0
    },
    changeRange : (state,action)=>{
        state.value += action.payload
    }
 }

})
/*action are need to component*/
export const {increment,decrement,reset,changeRange}=CounterSlice.actions
// reducer are need to store to update state
export default CounterSlice.reducer
