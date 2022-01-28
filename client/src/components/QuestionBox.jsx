import React from "react";

const QuestionBox = ({
  setCurrentQuestion,
  currentQuestion,
  questions,
  totalQuestions,
  score,
  setScore,
}) => {
  const checkAnswer = (usersAnswer) => {
    if (usersAnswer === questions.correctOption) {
      setScore(score + 1);
      setCurrentQuestion(currentQuestion + 1);
      console.log(questions.length, currentQuestion);
      console.log(typeof questions.question);
    } else {
      // Leave score as is and transition
      console.log(totalQuestions, currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  if (totalQuestions === currentQuestion + 1) {
    console.log("Im done with you");
  }
  return (
    <div className="col-md-8 d-block mx-auto">
      <div className="card z-depth-3 mt-5">
        <div className="card-body">
          <h3>Question #{currentQuestion + 1}</h3>
          <div>
            <p>
              {totalQuestions > 1
                ? questions.question[currentQuestion]
                : questions.question}
            </p>
            <div className="row">
              <div className="col-md-6 mb-2">
                <button
                  onClick={() => checkAnswer("Option A")}
                  className="btn w-100 btn-outline-dark shadow-none"
                >
                  {totalQuestions > 1
                    ? questions.optionA[currentQuestion]
                    : questions.optionA}
                </button>
              </div>

              <div className="col-md-6 mb-2">
                <button
                  onClick={() => checkAnswer("Option B")}
                  className="btn w-100 btn-outline-dark shadow-none"
                >
                  {totalQuestions > 1
                    ? questions.optionB[currentQuestion]
                    : questions.optionB}
                </button>
              </div>

              <div className="col-md-6 mb-2">
                <button
                  onClick={() => checkAnswer("Option C")}
                  className="btn w-100 btn-outline-dark shadow-none"
                >
                  {totalQuestions > 1
                    ? questions.optionC[currentQuestion]
                    : questions.optionC}
                </button>
              </div>

              <div className="col-md-6 mb-2">
                <button
                  onClick={() => checkAnswer("Option D")}
                  className="btn w-100 btn-outline-dark shadow-none"
                >
                  {totalQuestions > 1
                    ? questions.optionD[currentQuestion]
                    : questions.optionD}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex card-footer">
          <div className="ms-auto">
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              className="btn btn-info btn-rounded"
            >
              Next {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
