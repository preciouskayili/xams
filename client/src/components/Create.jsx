import React, { useState } from "react";
import Nav from "./Nav";
import QuestionsCard from "./QuestionsCard";
import { v4 as uuidv4 } from "uuid";
const Create = () => {
  const [examQuestions, setExamQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctOption, setCorrectOption] = useState("Option A");
  const examLength = examQuestions.length;

  console.log(optionA);
  const handleUpdate = (e) => {
    setExamQuestions((prevProps) => {
      return [
        ...prevProps,
        {
          id: id,
          title: title,
          category: category,
          question: question,
          optionA: optionA,
          optionB: optionB,
          optionC: optionC,
          optionD: optionD,
          correctOption: correctOption,
        },
      ];
    });
  };

  return (
    <>
      <Nav examQuestions={examQuestions} />

      <div className="bg-dark text-white text-center p-5">
        <h3>Add examination</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control mt-3"
                style={{ background: "transparent", color: "#ffff" }}
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                type="text"
                form="examForm"
                name="title"
                placeholder="Examination title"
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-control mt-3 form-border"
                required
                style={{ background: "transparent", color: "#ffff" }}
                name="category"
                onChange={(event) => setCategory(event.target.value)}
                value={category}
                form="examForm"
              >
                <option disabled selected>
                  Choose subject...
                </option>
                <option>Physics</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add question
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <>
              <div className="container p-3">
                <p>
                  <small className="text-danger">* </small>
                  Required
                </p>

                <div className="form-border mb-5">
                  <label htmlFor="textAreaExample">Question</label>
                  <small className="text-danger"> *</small>
                  <textarea
                    className="form-control"
                    id="textAreaExample"
                    rows="4"
                    required
                    name="question"
                    maxLength="700"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    autoComplete="off"
                  />
                  <div className="form-helper">{question.length} / 700</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-border mt-3">
                      <label>Option A</label>
                      <small className="text-danger"> *</small>
                      <input
                        type="text"
                        required
                        name="optionA"
                        className="form-control"
                        value={optionA}
                        onChange={(event) => setOptionA(event.target.value)}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-border mt-3">
                      <label>Option B</label>
                      <small className="text-danger"> *</small>
                      <input
                        type="text"
                        required
                        name="optionB"
                        className="form-control"
                        value={optionB}
                        onChange={(event) => setOptionB(event.target.value)}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-border mt-3">
                      <label>Option C</label>
                      <small className="text-danger"> *</small>
                      <input
                        type="text"
                        required
                        name="optionC"
                        className="form-control"
                        value={optionC}
                        onChange={(event) => setOptionC(event.target.value)}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-border mt-3">
                      <label>Option D</label>
                      <small className="text-danger"> *</small>
                      <input
                        type="text"
                        required
                        name="optionD"
                        className="form-control"
                        value={optionD}
                        onChange={(event) => setOptionD(event.target.value)}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-border mt-3">
                      <label>Correct option</label>
                      <small className="text-danger"> *</small>
                      <select
                        type="text"
                        required
                        name="correctOption"
                        className="form-control"
                        value={correctOption}
                        onChange={(event) =>
                          setCorrectOption(event.target.value)
                        }
                        autoComplete="off"
                      >
                        <option disabled selected>
                          Choose correct option...
                        </option>
                        <option value="Option A">Option A</option>
                        <option value="Option B">Option B</option>
                        <option value="Option C">Option C</option>
                        <option value="Option D">Option D</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-white btn-outline-dark"
                  onClick={() => {
                    handleUpdate(examQuestions);
                    setId(id + 1);
                    setQuestion("");
                    setOptionA("");
                    setOptionB("");
                    setOptionC("");
                    setOptionD("");
                    setCorrectOption("Option A");
                  }}
                  data-mdb-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "-2rem" }}>
        <div className="col-md-12 d-block mx-auto">
          <form
            action="http://localhost:9000/create"
            method="POST"
            id="examForm"
            autoComplete="off"
          >
            <button
              type="submit"
              className="btn btn-primary mx-auto mt-3 mb-3"
              disabled={examLength <= 0 ? true : false}
              style={{ display: examLength <= 0 ? "none" : "block" }}
            >
              Create examination
            </button>
          </form>
          {examQuestions.map((question) => (
            <div key={uuidv4()}>
              <QuestionsCard question={question} />
              <input
                type="hidden"
                name="question"
                form="examForm"
                value={question.question}
              />
              <input
                type="hidden"
                name="optionA"
                form="examForm"
                value={question.optionA}
              />
              <input
                name="optionB"
                type="hidden"
                form="examForm"
                value={question.optionB}
              />
              <input
                name="optionC"
                type="hidden"
                form="examForm"
                value={question.optionC}
              />

              <input
                name="optionD"
                type="hidden"
                form="examForm"
                value={question.optionD}
              />
              <input
                type="hidden"
                name="correctOption"
                form="examForm"
                value={question.correctOption}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Create;
