import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        }
    }
})

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(increment(amount));
    }, 2000)
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer