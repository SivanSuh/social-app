import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newCardSlice from "./slices/newCardSlice";
import userSlice from "./slices/auth/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { persistStore } from "redux-persist";
const persistConfig = {
    key:"root",
    storage
}
const rootReducer = combineReducers({
    newCard: newCardSlice,
    user:userSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;