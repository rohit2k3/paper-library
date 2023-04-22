import { enqueueSnackbar } from "notistack";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, LoadUser } from "../../store/action/userAction";
import Home from "../home/home";
import Loader from "../Loader/Loader";
import Profile from "../user/Profile";

const Dashboard = () => {
  const { isAuthenticated, user, error, message, loading } = useSelector(
    (state) => state.user
  );

  

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }

    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch(clearErrors());
    }
    dispatch(LoadUser());

    if (!isAuthenticated) {
      navigateTo("/loginSignup");
    }
  }, [isAuthenticated]);



  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>{loading ? <Loader /> : <div >  < Profile email = {user.email ?  user.email : "email not defined" } name = {user.name ? user.name : "Name not defined"} /> <Home /> </div>}</Fragment>
      ) : (
        <h1>I am not login</h1>
      )}
    </Fragment>
  );
};

export default Dashboard;
