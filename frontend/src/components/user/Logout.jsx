import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../store/action/userAction";
import { clearErrors } from "../../store/action/userAction";

const Logout = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );
  
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/loginSignup");
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch(clearErrors());
    }
    dispatch(userLogout());
  }, [message, error, dispatch]);

  return <div>Logout Success</div>;
};

export default Logout;
