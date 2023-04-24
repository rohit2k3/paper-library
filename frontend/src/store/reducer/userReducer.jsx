import { createReducer } from "@reduxjs/toolkit";

//login
export const loginReducer = createReducer(
  { user: [], isAuthenticated: false ,message:""},
  {
    LOGIN_REQUEST: (state, action) => {
      (state.loading = true)
    },
    REGSISTER_REQUEST: (state, action) => {
      (state.loading = true)
    },
    LOGOUT_REQUEST: (state, action) => {
      state.loading = true;
    },
    LOAD_REQUEST: (state, action) => {
      (state.loading = true);
    },
    LOGIN_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = true),
        (state.user = action.payload),
        (state.message = action.payload.message);
    },
    REGSISTER_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = true),
        (state.user = action.payload),
        (state.message = action.payload.message);
    },
    LOAD_SUCCESS: (state, action) => {
      (state.isAuthenticated = true),
      (state.loading = false),
      (state.message = action.payload.message),
      (state.user = action.payload.data);
    },
    LOGOUT_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.message = action.payload.message),
        (state.user = action.payload);
    },
    LOGIN_FAIL: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.error = action.payload);
    },
    REGSISTER_FAIL: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.error = action.payload);
    },
    LOAD_FAIL: (state, action) => {
      (state.loading = false),
        (state.error = action.payload);
    },
    LOGOUT_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    CLEAR_ERROR_USER: (state, action) => {
      state;
      state.error = null;
      state.message = "";
    },
  }
);

