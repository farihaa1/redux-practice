import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res?.data
})


const postSlice = createSlice({
    name:"posts",
    initialState: {
        isLoading:false,
        posts:[],
        error:null
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true;
        })
        builders.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.error = null;
        })
        builders.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=true;
            state.posts=[];
            state.error=action.error.message;
        })
    }
})


export default postSlice.reducer;
