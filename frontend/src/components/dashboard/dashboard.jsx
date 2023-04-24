import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../home/home";
import Profile from "../user/Profile";

const Dashboard = ({user , isAuthenticated = false}) => {

  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/loginSignup");
    }
  }, [isAuthenticated]);



  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment><div >  < Profile email = {user.email ?  user.email : "email not defined" } name = {user.name ? user.name : "Name not defined"} /> <Home /> </div></Fragment>
      ) : (
        <h1>I am not login</h1>
      )}
    </Fragment>
  );
};

export default Dashboard;
