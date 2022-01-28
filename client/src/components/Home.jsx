import React, { useState, useEffect } from "react";
import ErrorCard from "./ErrorCard";
import Spinner from "./Spinner";
import SideBar from "./Sidebar";
import TestCards from "./TestCards";
import axios from "axios";
import "./assets/css/hero.css";

const Home = () => {
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:9000/";
    const source = axios.CancelToken.source();

    axios
      .get("/create")
      .then((res) => {
        if (res.status !== 200) {
          setError(res.statusText);
        }
        setExams(res);
        setIsLoading(false);
        return res.json();
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <SideBar />

      <div
        className="container-fluid cover bg-dark p-5"
        style={{ height: "55vh" }}
      >
        <div className="row">
          <div className="my-auto mb-4">
            <h1 className="font-weight-bold text-center text-light">
              Community
            </h1>
            <p className="text-white text-center subtitle">
              Search for questions made by students for students
            </p>
          </div>
        </div>

        <div className="container mb-3">
          <div className="col-md-6 mx-auto">
            <div className="card p-3">
              <div className="input-group rounded-3">
                <span className="input-group-text border-0" id="search-addon">
                  Search
                </span>
                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "-1rem" }}>
        <div className="row">
          {error && <ErrorCard error={error} />}
          {isLoading && <Spinner />}
          {/* Test cards */}
          {exams.data ??
            exams.map((exam) => <TestCards key={exam._id} testDetail={exam} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
