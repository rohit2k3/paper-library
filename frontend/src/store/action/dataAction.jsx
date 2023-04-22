import { server } from "../Store";
import axios from "axios";

export const getHomeData = () => async (dispatch) => {
  try {
    dispatch({ type: "HOME_DATA_REQUEST" });
    const { data } = await axios.get(`${server}/api/getAllData`);
    dispatch({ type: "HOME_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "HOME_DATA_FAIL",
      payload: error.message,
    });
  }
};

//get one semester data
export const getOneSem = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SEM_DATA_REQUEST" });
    const { data } = await axios.get(`${server}/api/getOneAllData/${id}`);
    dispatch({ type: "SEM_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "SEM_DATA_FAIL",
      payload: error.message,
    });
  }
};
//get one semester data
export const getOneSemSubjects = (id, branchShortCode) => async (dispatch) => {
  try {
    dispatch({ type: "SEM_SUB_DATA_REQUEST" });
    const { data } = await axios.get(
      `${server}/api/getAllSubs/${id}/${branchShortCode}`
    );
    dispatch({ type: "SEM_SUB_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "SEM_SUB_DATA_FAIL",
      payload: error.message,
    });
  }
};

//get question answer
export const paperData =
  (subCode, from, to, branchShort) => async (dispatch, getState) => {
    try {
      // const { paperReducer } = getState(); // get the current login state
      // if (paperReducer.error) {
      //   dispatch({ type: "CLEAR_ERROR" }); // dispatch CLEAR_ERROR if there is an existing error
      // }
      dispatch({
        type: "PAPER_DATA_REQUEST",
      });
      const { data } = await axios.get(
        `${server}/api/getPaper/${subCode}?from=${from}&to=${to}&branch=${branchShort}`
      );
      dispatch({
        type: "PAPER_DATA_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PAPER_DATA_FAIL",
        payload: error.response.data.message,
      });
    }
  };

// paper get
export const paperGetAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PAPER_UPDATE_REQUEST" });
    const { data } = await axios.get(`${server}/api/updatePaper/${id}`);

    dispatch({ type: "PAPER_UPDATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PAPER_UPDATE_FAIL",
      payload: error.response.data.message,
    });
  }
};

//paper update
export const paperUpdateAction = (updateData, id,) => async (dispatch) => {
  try {
    dispatch({ type: "PAPER_UPDATE_REQUEST" });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${server}/api/updatePaper/${id}`,
      updateData,
      config
    );
    dispatch({ type: "PAPER_UPDATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PAPER_UPDATE_FAIL",
      payload: error.response.data.message,
    });
  }
};
//paper create
export const paperCreateAction = (updateData) => async (dispatch) => {
  try {
    dispatch({ type: "PAPER_CREATE_REQUEST" });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${server}/api/create`,
      updateData,
      config
    );
    dispatch({ type: "PAPER_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PAPER_CREATE_FAIL",
      payload: error.response.data.message,
    });
  }
};
//message send 
export const messageSendAction = (updateData) => async (dispatch) => {
  try {
    dispatch({ type: "MESSAGE_SEND_REQUEST" });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${server}/api/sendMessage`,
      updateData,
      config
    );
    dispatch({ type: "MESSAGE_SEND_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "MESSAGE_SEND_FAIL",
      payload: error.response.data.message,
    });
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERROR",
  });
};
