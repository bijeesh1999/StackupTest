import { createSlice } from '@reduxjs/toolkit'
import {postTask,getAllTask,updateTask} from "./taskApi"

const initialState = {
    data: [],
    status: "idle",
    error: ""
}

const taskSlice=createSlice({
    name:"getTask",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getAllTask.pending, (state,action) => {
            state.status = "loading"
        })
        .addCase(getAllTask.fulfilled, (state,action) => {
            state.status = "succeeded"
            state.data=action.payload
        })
        .addCase(getAllTask.rejected, (state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })

        // =========================================


    }
})

export default taskSlice.reducer;






