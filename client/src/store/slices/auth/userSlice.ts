import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface UserProps {
    userName:string,
    email:string,
    password:string,
}

export const register = createAsyncThunk("user/register", async () => {
    const response = await axios("http://localhost:8000/users/signup")
    const data = await response.data
    return data

})
const initialState:UserProps = {
    userName:"",
    email:"",
    password:"",
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(register.fulfilled, (state,action) => {
            
        })
    },
})


export default userSlice.reducer