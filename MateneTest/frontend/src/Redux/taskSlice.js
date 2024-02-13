import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    status: "idle",
    error: ""
}

const taskSlice=()=>({
    name:"getTask",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.posts = state.posts.concat(action.payload);
        })
        .addCase(fetchPosts.rejected, (state) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default taskSlice.reducer;






