import { configureStore } from "@reduxjs/toolkit";
import newCardSlice from "./slices/newCardSlice";
import userSlice from "./slices/auth/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        newCard: newCardSlice,
        user:userSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;