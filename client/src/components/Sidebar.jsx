import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import "./assets/css/sidebar.css";
import logo from "./assets/imgs/logo.png";

const SideBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [homeIsActive, setHomeIsActive] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (location.pathname === "/") {
      setHomeIsActive(true);
    } else {
      setHomeIsActive(false);
    }
  }, []);

  return (
    <>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />

      <div className={isToggled ? "sidenav active shadow" : "sidenav"}>
        <div className="mt-5">
          <div className="d-flex my-auto p-1 mt-3">
            <img src={logo} className="logo" alt="Logo" />
            <div className="my-auto ms-2 mt-2">
              <h5 className="font-weight-bold text-white">Xams</h5>
            </div>
          </div>
          <hr className="bg-white" />
          <ul>
            <li>
              <NavLink
                className={homeIsActive ? "link selected" : "link"}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                className="link"
                to="/examination/1"
              >
                Examinations
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="link" to="/team">
                My Team
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                className="link"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="link" to="/create">
                Create quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                className="link"
                to="/messages"
              >
                Messages
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
