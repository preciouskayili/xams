import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/imgs/logo.png";
const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-none"
			style={{ borderBottom: "1px solid #bdbdbd" }}
		>
			<div className="container-fluid">
				<NavLink className="navbar-brand mb-0 h1" to="/">
					<img src={logo} style={{ width: "2rem" }} alt="Xams" />
					Xams
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								aria-current="page"
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/team" activeClassName="active">
								<i className="fas fa-chalkboard-teacher"></i> My team
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/profile"
								activeClassName="active"
							>
								<i className="fas fa-user-graduate"></i> My Profile
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/stats"
								activeClassName="active"
							>
								<i className="fas fa-chart-line"></i> My History
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/create"
								activeClassName="active"
							>
								<i className="fas fa-pen"></i> Create
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
