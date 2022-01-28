import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./assets/css/questions_card.css";

const QuestionsCard = ({ question }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="col-md-9 d-block mx-auto" key={uuidv4()}>
      <div className="card bg-light mt-5 mb-3">
        <div className="card-body p-5">
          <div className="d-flex">
            <h2>#{question.id}</h2>
            <p className="card-title">{question.question}</p>

            <div className="ms-auto">
              <button
                onClick={() => setIsHidden(!isHidden)}
                className="btn btn-warning btn-sm"
              >
                {isHidden ? "-" : "+"}
              </button>
              <button className="btn btn-danger btn-sm ms-2">x</button>
            </div>
          </div>

          <div className={isHidden ? "row animate mt-3" : "row mt-3 d-none"}>
            <div className="col-md-12 mb-4">
              <div className="card border border-1 border-dark shadow-none">
                <div className="card-body my-auto p-3">
                  <small className="font-weight-bold">Option A:</small>
                  <p>{question.optionA}</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-4">
              <div className="card border border-1 border-dark shadow-none">
                <div className="card-body my-auto p-3">
                  <small className="font-weight-bold">Option B:</small>
                  <p>{question.optionB}</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-4">
              <div className="card border border-1 border-dark shadow-none">
                <div className="card-body my-auto p-3">
                  <small className="font-weight-bold">Option C:</small>
                  <p>{question.optionC}</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-4">
              <div className="card border border-1 border-dark shadow-none">
                <div className="card-body my-auto p-3">
                  <small className="font-weight-bold">Option D:</small>
                  <p>{question.optionD}</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card border border-2 border-success shadow-none">
                <div className="card-body my-auto p-3">
                  <small className="font-weight-bold">Correct option:</small>
                  <p>{question.correctOption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;
