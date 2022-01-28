import React from "react";
import SideBar from "./Sidebar";
import img from "./croods.png";
import { NavLink } from "react-router-dom";

const Team = () => {
  return (
    <>
      <SideBar />
      <div
        className="bg-dark text-white text-center"
        style={{ padding: "5rem" }}
      ></div>
      <div className="container" style={{ marginTop: "-2rem" }}>
        <div className="card mt-3">
          <div className="card-body d-flex">
            <img
              src={img}
              style={{ borderRadius: "50%" }}
              alt="Croods"
              width="50"
              height="50"
            />
            <p
              className="mt-auto"
              style={{ marginLeft: ".95rem", fontWeight: 500 }}
            >
              Precious Solomon
            </p>
            <NavLink
              to="/"
              style={{ position: "absolute", right: "2%", top: "30%" }}
              className="btn btn-danger btn-sm rounded ml-auto p-2"
            >
              <i className="fas fa-user-times"></i>
            </NavLink>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body d-flex">
            <img
              src={img}
              style={{ borderRadius: "50%" }}
              alt="Croods"
              width="50"
              height="50"
            />
            <p
              className="mt-auto"
              style={{ marginLeft: ".95rem", fontWeight: 500 }}
            >
              Precious Solomon Kayili
            </p>
            <NavLink
              to="/"
              style={{ position: "absolute", right: "2%", top: "30%" }}
              className="btn btn-danger btn-sm rounded ml-auto p-2"
            >
              <i className="fas fa-user-times"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
