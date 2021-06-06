import React from "react";

const Spinner = () => {
	return (
		<>
			<div
				className="spinner-border text-danger d-flex mx-auto bg-dark"
				style={{ width: "3rem", height: "3rem" }}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
			<p className="text-center text-danger">Loading...</p>
		</>
	);
};

export default Spinner;
