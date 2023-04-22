import React, { Fragment, useRef, useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { MdMailOutline, MdLockOpen, MdOutlineTagFaces } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginAction,
  registerAction,
  clearErrors,
} from "../../store/action/userAction";
import { enqueueSnackbar } from "notistack";
import MetaData from "../MetaData";
const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigateTo("/dashboard");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

  //switch tab management
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  const onLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const registerDataChange = (event) => {
    const { name, value } = event.target;
    setregisterData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(getLoginAction(loginData));
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(registerData));
    // enqueueSnackbar("Register Success", { variant: 'success' });
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData key={"11"} title={"Login & Register"} />
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={loginData.email}
                    onChange={onLoginChange}
                  />
                </div>
                <div className="loginPassword">
                  <MdLockOpen />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={loginData.password}
                    onChange={onLoginChange}
                  />
                </div>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <MdOutlineTagFaces />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={registerData.name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={registerData.email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <MdLockOpen />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={registerData.password}
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignup;
