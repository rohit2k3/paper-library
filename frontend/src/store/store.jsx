import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  homeReducer,
  oneSemDataReducer,
  oneSemDataSubjectReducer,
  paperDataReducer,
  paperUpdateReducer,
} from "./reducer/dataReducer";
import { loginReducer } from "./reducer/userReducer";


const rootReducer = combineReducers({ 
  homeData: homeReducer,
  paperReducer: paperDataReducer,
  semData: oneSemDataReducer,
  semSubject: oneSemDataSubjectReducer,
  user: loginReducer,
  updatePaper:paperUpdateReducer
})


export const server = "http://localhost:5000";

export const store = configureStore({
  reducer: rootReducer
});

