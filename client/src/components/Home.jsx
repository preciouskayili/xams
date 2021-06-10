import React, { useState, useEffect } from "react";
import ExamCard from "./ExamCard";
import ErrorCard from "./ErrorCard";
import Spinner from "./Spinner";
import "./assets/css/background.css";
import SideBar from "./Sidebar";
import TestCards from "./TestCards";
const Home = ({ isToggled }) => {
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorDetails, setErrorDetails] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("http://localhost:9000/create")
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setExams(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorDetails(`${error}`);
        setError(true);
        console.log("Error dey");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <SideBar />

      <div className="container-fluid bg-info p-5">
        <div className="col-md-7">
          <h2 className="text-white">Community</h2>
        </div>
      </div>

      <div className="container" style={{ marginTop: "-1rem" }}>
        <div className="row">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {error ? (
                <ErrorCard error={errorDetails} />
              ) : (
                <>
                  {/* Test cards */}
                  {exams.map((exam) => (
                    <TestCards key={exam._id} testDetail={exam} />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
