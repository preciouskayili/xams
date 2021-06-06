import React from "react";

const QuestionBox = () => {
	return (
		<div className="col-md-8 d-block mx-auto">
			<div className="card z-depth-3 mt-5">
				<div className="card-body">
					<h3>Question #1</h3>
					<div>
						<p>
							If a ball is projected at angle of 45 degrees and travels at a
							speed of 10 miles per second, calculate the time taken to reach
							the maximum height
						</p>
						<div className="row mx-auto">
							<div
								className="col-md-6 mb-2"
								style={{
									border: "1px solid #bfbfbf",
									borderRadius: "5px",
									padding: "0.7rem",
								}}
							>
								<div className="form-check d-block mx-auto">
									<input
										className="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<label
										className="form-check-label"
										htmlFor="flexRadioDefault1"
									>
										2x+2y-3
									</label>
								</div>
							</div>

							<div
								className="col-md-6 mb-2"
								style={{
									border: "1px solid #bfbfbf",
									borderRadius: "5px",
									padding: "0.7rem",
								}}
							>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="form-check-label"
										htmlFor="flexRadioDefault2"
									>
										2x+2y-3
									</label>
								</div>
							</div>

							<div
								className="col-md-6 mb-2"
								style={{
									border: "1px solid #bfbfbf",
									borderRadius: "5px",
									padding: "0.7rem",
								}}
							>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault3"
									/>
									<label
										className="form-check-label"
										htmlFor="flexRadioDefault3"
									>
										2x+2y-3
									</label>
								</div>
							</div>

							<div
								className="col-md-6 mb-2"
								style={{
									border: "1px solid #bfbfbf",
									borderRadius: "5px",
									padding: "0.7rem",
								}}
							>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault4"
									/>
									<label
										className="form-check-label"
										htmlFor="flexRadioDefault4"
									>
										2x+2y-3
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<button className="btn btn-primary btn-sm rounded">Next {">"}</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionBox;
