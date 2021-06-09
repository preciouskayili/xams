import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/imgs/logo.png";
const Navbar = ({ isToggled, setIsToggled }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button
          className="btn btn-dark btn-floating"
          onClick={() => setIsToggled(!isToggled)}
        >
          <i className={ isToggled ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
        <NavLink className="navbar-brand mb-0 h1" to="/">
          Xams
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
