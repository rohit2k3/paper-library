import { createReducer } from "@reduxjs/toolkit";

export const homeReducer = createReducer(
  { error: null, loading: true, result: [], message: "" },
  {
    HOME_DATA_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    HOME_DATA_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.data);
    },
    HOME_DATA_FAIL: (state, action) => {
      (state.loading = true), (state.error = action.payload);
    },
    CLEAR_ERROR: (state, action) => {
      state;
      state.error = null;
    },
  }
);

export const paperDataReducer = createReducer(
  { error: null, loading: true, result: [], message: "" },
  {
    PAPER_DATA_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    PAPER_DATA_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.result),
      (state.error = null);
    },
    PAPER_DATA_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    CLEAR_ERROR: (state, action) => {
      state,
      state.error = null;
    },
  }
);

//get one semData
export const oneSemDataReducer = createReducer(
  { error: null, loading: true, result: [], message: "" },
  {
    SEM_DATA_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    SEM_DATA_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.data.subjects);
    },
    SEM_DATA_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    CLEAR_ERROR: (state, action) => {
      state;
      state.error = null;
    },
  }
);
//get one semData of all subjects
export const oneSemDataSubjectReducer = createReducer(
  { error: null, loading: true, result: [], message: "" },
  {
    SEM_SUB_DATA_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    SEM_SUB_DATA_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.data);
    },
    SEM_SUB_DATA_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    CLEAR_ERROR: (state, action) => {
      state;
      state.error = null;
    },
  }
);

//paper  update
export const paperUpdateReducer = createReducer(
  { error: null, loading: false, result: [], message: "" },
  {
    PAPER_UPDATE_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    PAPER_CREATE_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    MESSAGE_SEND_REQUEST: (state, action) => {
      (state.loading = true), (state.result = []);
    },
    PAPER_UPDATE_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.data);
    },
    PAPER_CREATE_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.data);
    },
    MESSAGE_SEND_SUCCESS: (state, action) => {
      (state.loading = false),
        (state.message = action.payload.message),
        (state.result = action.payload.data);
    },
    PAPER_UPDATE_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    PAPER_CREATE_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    MESSAGE_SEND_FAIL: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    CLEAR_ERROR: (state, action) => {
      state;
      state.message = "";
      state.error = null;
    },
  }
);
