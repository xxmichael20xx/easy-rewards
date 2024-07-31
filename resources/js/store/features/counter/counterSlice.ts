import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { incrementCounter } from "@/store/features/counter/counterActions";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementCounter.pending, (state, action) => {
                console.log('pending increment counter')
            })
            .addCase(incrementCounter.fulfilled, (state, action) => {
                console.log('fulfilled increment counter')
                console.log(action.payload)
            })
            .addCase(incrementCounter.rejected, (state, action) => {
                console.log('rejected increment counter')
            })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
