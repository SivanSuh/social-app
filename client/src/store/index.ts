import { configureStore } from "@reduxjs/toolkit";
import newCardSlice from "./slices/newCardSlice";

export const store = configureStore({
    reducer:{
        newCard: newCardSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch