import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface NewCardProps {
content:any[],
isLoading:false,
error:boolean
}

export const getCard = createAsyncThunk("getAllCard", async () => {
    const res = await axios("http://localhost:8000/card/all-card")
    const data = await res.data
    return  data
})
export const postCard = createAsyncThunk("postCard", async (post:Object) => {
    try {
        const res  = await axios.post("http://localhost:8000/card/create-card",post)
        return  res.data
    } catch (error) {
        console.log(error)
    }
})
const initialState:NewCardProps = {
    content:[],
    isLoading:false,
    error:false
}
const newCardSlice = createSlice({
    name:"new-card",
    initialState,
    reducers:{
        onAdd:(state,action:PayloadAction<NewCardProps>) => {
             state.content.push(action.payload);
          
        }
    },
    extraReducers(builder) {
        // get
        builder.addCase(getCard.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(getCard.fulfilled, (state,action) => {
            state.content = action.payload
        })
        // post
        builder.addCase(postCard.fulfilled, (state,action) => {
            state.content.push(action.payload);
        })
        builder.addCase(postCard.rejected,(state) => {
            state.error = true
        })
    },
})

export const  { onAdd} = newCardSlice.actions
export default newCardSlice.reducer