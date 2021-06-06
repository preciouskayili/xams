import React from "react";
import { Link } from "react-router-dom";
const Nav = ({ examQuestions }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-white sticky-top">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<div className="container-fluid">
					<div className="d-flex">
						<li className="nav-item">
							<Link
								to="/"
								disabled
								className="btn btn-white btn-outline-danger btn-sm rounded waves-effect"
								style={{ padding: "8px 20px", marginRight: "0.5rem" }}
							>
								<i className="fas fa-times"></i>
							</Link>
						</li>

						<li className="nav-item">
							<button
								type="button"
								className="btn btn-white btn-sm btn-outline-dark"
								data-mdb-toggle="modal"
								data-mdb-target="#exampleModal"
								style={{ padding: "8px 20px" }}
								disabled={examQuestions.length === 20 ? true : false}
							>
								<i className="fas fa-plus"></i> Add question
							</button>
						</li>
					</div>
				</div>
			</ul>
		</nav>
	);
};

export default Nav;
