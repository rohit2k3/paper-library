import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/logo.png";
const Header = ({isAuthenticated }) => {

  const [isOpen, setisOpen] = useState(false);

  const handleMenu = () => {
    setisOpen(!isOpen);
  };


  return (
    <nav>
      <div onClick={handleMenu} className="hamburgerMenu">
        <MdMenuOpen />
      </div>
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <div
        className={`desktop-btn ${
          isOpen ? `mob-menu-open` : `mob-menu-close`
        } `}
      >
        <div onClick={handleMenu} className="menuclose">
          <CgClose />
        </div>
        <Link onClick={handleMenu} className="navbtns" to={"/"}>
          Home
        </Link>
      
        <Link onClick={handleMenu} className="navbtns" to={"/about"}>
          About
        </Link>
        <Link onClick={handleMenu} className="navbtns" to={"/contact"}>
          Contact Us
        </Link>
        <Link onClick={handleMenu} className="navbtns" to={"/disclaimer"}>
          Disclaimer
        </Link>
        <Link onClick={handleMenu}  className="loginbtn" to={"/loginSignup"}>
          {isAuthenticated ? "Dashboard" : "Login"}
        </Link>
        {isAuthenticated ? <Link onClick={handleMenu} className="loginbtn" to={"/logout"}>
          Logout
        </Link> : ""}
      </div>
    </nav>
  );
};

export default Header;
