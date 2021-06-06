import React from "react";
import { v4 as uuidv4 } from "uuid";

const QuestionsCard = ({ question }) => {
	return (
		<div className="col-md-9 d-block mx-auto" key={uuidv4()}>
			<div className="card mb-3">
				<div className="card-body">
					<h5 style={{ fontWeight: "300" }} className="card-title">
						{question.question}
					</h5>
					<p className="font-weight-bold">Option A: {question.optionA}</p>
					<p className="font-weight-bold">Option B: {question.optionB}</p>
					<p className="font-weight-bold">Option C: {question.optionC}</p>
					<p className="font-weight-bold">Option D: {question.optionD}</p>
					<small className="font-weight-bold text-muted">Correct option:</small>
					<p className="lead">
						<i
							className="fas fa-check-circle text-success"
							style={{ marginRight: 5 }}
						></i>
						{question.correctOption}
					</p>
				</div>
			</div>
		</div>
	);
};

export default QuestionsCard;
