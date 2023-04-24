import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import {  store } from "./store/store";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider autoHideDuration={2000}>
    <Provider store={store}>
        <App />
    </Provider>
  </SnackbarProvider>
);
