import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,


    },
})



function Store() {
    return (
        <div>Store</div>
    )
}

export default Store