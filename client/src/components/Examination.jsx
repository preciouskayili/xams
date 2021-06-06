import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionBox from "./QuestionBox";

const Examination = ({ match }) => {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:9000/examination/${match.params.id}`)
			.then((res) => res.json())
			.then((result) => {
				setQuestions(questions);
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [match, questions]);
	return (
		<div className="bg-light" style={{ height: "100vh" }}>
			<div className="bg-primary text-white">
				<div className="container-fluid">
					<Link to="/" className="p-2 btn btn-danger mt-2">
						&times; Quit exam
					</Link>
				</div>
				<div className="p-5">
					<h3 className="text-center text-white">Physics</h3>
				</div>
			</div>
			<div className="container" style={{ marginTop: "-5rem" }}>
				<QuestionBox />
			</div>
		</div>
	);
};

export default Examination;
