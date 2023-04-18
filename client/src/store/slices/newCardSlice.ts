import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface NewCardProps {
   newArea: any[] 
}

const initialState: NewCardProps = {
    newArea:[]
}

const newCardSlice = createSlice({
    name:"new-card",
    initialState,
    reducers:{
        onAdd:(state,action:PayloadAction<any[]>) => {
            state.newArea.push(action.payload)
          
        }
    }
})

export const  { onAdd} = newCardSlice.actions
export default newCardSlice.reducer