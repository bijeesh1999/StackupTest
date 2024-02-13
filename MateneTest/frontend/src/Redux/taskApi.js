import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export const postTask=createAsyncThunk("post/postTask",
async (data)=>{

    const response=await axios.post("http://localhost:2000",data)
    if(response){
        return response.data
    }
    else{
        return "error"
    }
})

export const getAllTask=createAsyncThunk("get/getAllTask",
async ()=>{

    const response=await axios.post("http://localhost:2000")
    if(response){
        console.log(response);
        return response.data
    }
    else{
        return "error"
    }

})

export const updateTask=createAsyncThunk("put/updateTask",
async ({id,data})=>{

    const response=await axios.post(`http://localhost:2000${id}`,data)
    if(response){
        console.log(response);
        return response.data
    }
    else{
        return "error"
    }

})