import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// async/api usage sample
export const incrementCounter = createAsyncThunk(
    'counter/increment',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        return await response.data
    }
)
