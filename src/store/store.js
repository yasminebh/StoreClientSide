import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginSlice } from "./login";

const rootReducer = combineReducers({
  login: loginSlice.reducer, // Ensure you use ".reducer" to access the reducer
});

const persistConfig = {
  key: "root",
  storage: storage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
