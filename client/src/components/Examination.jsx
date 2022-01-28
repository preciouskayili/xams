import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorCard from "./ErrorCard";
import QuestionBox from "./QuestionBox";
import Spinner from "./Spinner";

const Examination = ({ match }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [score, setScore] = useState(0);
  // useEffect(() => {
  //   fetch(`http://localhost:9000/examination/${match.params.id}`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         res.json();
  //       }
  //       return res.json();
  //     })
  //     .then((result) => {
  //       setQuestions(result);
  //       setIsLoading(false);
  //       setError(false);
  //       setTotalQuestions(questions.question.length);
  //     })
  //     .catch((err) => {
  //       setErrorDetails(`${err}`);
  //       setIsLoading(false);
  //       setError(false);
  //     });
  // }, [match, questions]);

  return (
    <>
      <div className="bg-info">
        <div className="text-white">
          <div className="container-fluid">
            <Link to="/" className="p-2 btn btn-danger mt-2">
              &times; Quit exam
            </Link>
          </div>
          <div className="p-5">
            <h3 className="text-center text-white">Physics</h3>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "-5rem" }}>
        {isLoading && <Spinner />}
        {error ? (
          <ErrorCard error={errorDetails} />
        ) : (
          <QuestionBox
            totalQuestions={totalQuestions}
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            score={score}
            setScore={setScore}
          />
        )}
      </div>
    </>
  );
};

export default Examination;
