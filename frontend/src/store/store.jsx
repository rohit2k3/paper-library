import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  homeReducer,
  oneSemDataReducer,
  oneSemDataSubjectReducer,
  paperDataReducer,
  paperUpdateReducer,
} from "./reducer/dataReducer";
import { loginReducer } from "./reducer/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ 
  homeData: homeReducer,
  paperReducer: paperDataReducer,
  semData: oneSemDataReducer,
  semSubject: oneSemDataSubjectReducer,
  user: loginReducer,
  updatePaper:paperUpdateReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const server = "https://paper-answer-backend.onrender.com";
// export const server = "http://localhost:5000";
export const server = "";

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store)
