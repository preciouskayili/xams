import React from "react";
import Navbar from "./Navbar";
import croods from "./croods.png";
import SideBar from "./Sidebar";
import "./assets/css/background.css";
const Profile = () => {
  return (
    <div>
      <SideBar />
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Profile</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="card background">
                  <div className="card-body d-block mx-auto">
                    <img
                      src={croods}
                      style={{
                        borderRadius: "50%",
                        border: "0.20rem solid #ddd",
                        height: "7rem",
                        width: "7rem",
                      }}
                      alt="Croods"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Precious Solomon</h5>
                  <p>January, 23rd 2021</p>
                  <small className="text-muted">23 exams</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <div className="card">
              <div className="card-body">
                <p style={{ fontWeight: 300 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat fugit sed est nobis, quidem rem autem aliquid
                  voluptas nulla inventore soluta facere pariatur ut et omnis ad
                  odit! Culpa, voluptates. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Repellat fugit sed est nobis,
                  quidem rem autem aliquid voluptas nulla inventore soluta
                  facere pariatur ut et omnis ad odit! Culpa, voluptates. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Repellat
                  fugit sed est nobis, quidem rem autem aliquid voluptas nulla
                  inventore soluta facere pariatur ut et omnis ad odit! Culpa,
                  voluptates.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Repellat fugit sed est nobis, quidem rem autem aliquid
                  voluptas nulla inventore soluta facere pariatur ut et omnis ad
                  odit! Culpa, voluptates. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. lorem ispum dolor sit amet presh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
