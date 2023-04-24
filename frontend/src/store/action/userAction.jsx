import { server } from "../Store";
import axios from "axios";
axios.defaults.withCredentials = true;
export const getLoginAction = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const config = { headers: { "Content-Type": "application/json"  } , withCredentials:true ,  credentials: "same-origin"};
    const { data } = await axios.post(`${server}/api/login`, loginData, config   );
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const registerAction = (registerData) => async (dispatch) => {
  try {
    dispatch({ type: "REGSISTER_REQUEST" });
    const config = { headers: { "Content-Type": "application/json"  } , withCredentials:true ,  credentials: "same-origin"};

    const { data } = await axios.post(
      `${server}/api/register`,
      registerData,
      config
    );
    dispatch({ type: "REGSISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "REGSISTER_FAIL",
      payload: error.response.data.message,
    });
  }
};

//get user
export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_REQUEST" });
    const { data } = await axios.get(`${server}/api/getUser`);
    dispatch({ type: "LOAD_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "LOAD_FAIL",
      payload: error.response.data.message,
    });
  }
};

//loggout
export const userLogout = () => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_REQUEST" });
    const { data } = await axios.get(`${server}/api/logout`);
    dispatch({ type: "LOGOUT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAIL",
      payload: error.response.data.message,
    });
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERROR_USER",
  });
};
