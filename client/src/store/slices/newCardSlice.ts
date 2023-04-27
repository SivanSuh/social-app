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
    
        const res  = await axios.post("http://localhost:8000/card/create-card",post)
        return  res.data
  
})
export const deleteCard = createAsyncThunk("delete-card",async (cardId:string ) => {
   
         await axios.delete(`http://localhost:8000/card/delete-card/${cardId}`)
        return cardId
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
        },
        onDelete:(state,action) => {
           state.content = state.content.filter((item) => item._id !== action.payload._id)
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

        // delete 
        builder.addCase(deleteCard.fulfilled,(state,action) => {
            const id = action.payload;
          
               state.content = state.content.filter((items) => items.id !== id)
                console.log("delete items thunk", action.payload)
            
        })
        builder.addCase(deleteCard.rejected, (state,action) => {
            state.error = true
        })
    },
})

export const  { onAdd, onDelete} = newCardSlice.actions
export default newCardSlice.reducer