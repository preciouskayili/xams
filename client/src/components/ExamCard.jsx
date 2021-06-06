import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./assets/css/background.css";
import { v4 as uuidv4 } from "uuid";
const ExamCard = ({ exams, query }) => {
	return (
		<>
			{query !== "" ? (
				<p className="text-center text-white">
					<i>Showing results for </i>"{query}"
				</p>
			) : (
				""
			)}
			{exams.map((exam) => (
				<div className="col-md-3 mb-3" key={uuidv4()}>
					<Link to={`/examination/${exam._id}`}>
						<div className="card background" style={{ padding: "2rem" }}>
							<div className="card-body text-center text-white">
								<h3
									className="card-title text-center"
									style={{
										textOverflow: "ellipsis",
										overflow: "hidden",
										whiteSpace: "nowrap",
										width: "100%",
									}}
								>
									{exam.title}
								</h3>
								<small className="small">
									{moment(exam.createdAt).format("MMM Do YYYY")}
								</small>
								<br />
								<mark>
									<small className="text-center small">320 Questions</small>
								</mark>
							</div>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};

export default ExamCard;
