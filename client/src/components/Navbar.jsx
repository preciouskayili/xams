import React from "react";
import "./assets/css/search.css";
const Navbar = ({ isToggled, setIsToggled }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      
      <div className="container-fluid">
        <button
          className="btn btn-dark btn-floating"
          onClick={() => setIsToggled(!isToggled)}
        >
          <i className={isToggled ? "fa fa-times" : "fa fa-bars"}></i>
        </button>

        <form action="/" className="form-inline d-flex">
          <input className="search-input form-control" placeholder="Search the community" type="search" />
          <button className="btn shadow-none btn-sm search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
