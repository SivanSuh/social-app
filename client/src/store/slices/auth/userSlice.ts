import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_USER;

interface UserProps {
    formContent: Object;
    isLoggin : boolean;
    isError:boolean;
}



export const loginAuth = createAsyncThunk("user/register", async (values:Object) => {
    const response = await axios.post(`${BASE_URL}/login`, values)
    const data = await response.data
    console.log("oject ", values)
    localStorage.setItem("user_ınfo",JSON.stringify(values))
    return data

})

export const registerAuth = createAsyncThunk("user/new-login", async (userInfo: Object) => {
    const response = await axios.post(`${BASE_URL}/signup`, userInfo)
    const data = await response.data
    console.log("login new register ", userInfo)
    localStorage.setItem("user_ınfo",JSON.stringify(userInfo))
    return data
})
const initialState:UserProps = {
    formContent:{
        
    },
    isLoggin:false,
    isError:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(registerAuth.pending,(state,action) => {
            state.isLoggin = false
        })
        builder.addCase(registerAuth.fulfilled, (state,action) => {
            state.formContent = action.payload;
          
            state.isLoggin = true
            console.log("action.payload",action.payload)
        })
        builder.addCase(registerAuth.rejected, (state,action) => {
            state.isLoggin = false;
            state.isError = true
        })

        // register
        builder.addCase(loginAuth.pending, (state,action) => {
            state.isLoggin = false;
            state.isError = false
        })
        builder.addCase(loginAuth.fulfilled,  (state,action) => {
            state.formContent = action.payload
  
            state.isLoggin = true
            console.log("action payload login", action.payload)
        })
    },
})


export default userSlice.reducer