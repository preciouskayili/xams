import React from "react";

const ErrorCard = ({ error }) => {
	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					<h3>OOPS, An error occurred.</h3>
					<p>There was an error in getting your results.</p>
					<small>{error}</small>
				</div>
			</div>
		</div>
	);
};

export default ErrorCard;
