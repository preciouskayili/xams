import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ExamCard from "./ExamCard";
import ErrorCard from "./ErrorCard";
import Spinner from "./Spinner";
import "./assets/css/background.css";
import SideBar from './Sidebar';
const Home = () => {
	const [exams, setExams] = useState([]);
	const [searchExam, setSearchExam] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [queryValue, setQueryValue] = useState("");
	const [query, setQuery] = useState("");
	useEffect(() => {
		fetch("http://localhost:9000/create")
			.then((res) => res.json())
			.then((data) => {
				setExams(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(`${error}`);
				setIsLoading(false);
			});
	}, []);

	const handleSearch = () => {
		setQueryValue(query);
		fetch(`http://localhost:3000/create/search/Examination`)
			.then((res) => res.json())
			.then((result) => {
				setSearchExam(result);
				console.log(searchExam);
			})
			.catch((err) => {
				setError(`${error}`);
			});
	};

	return (
		<>
			<SideBar />
			<div>
				<h1>{!isLoading ? error : "Not yet"}</h1>
				<div
					className="bg-dark text-center background"
					style={{ padding: "5rem" }}
				>
					<h3 className="text-center">Question library</h3>
					<hr
						className="d-block mx-auto"
						style={{ width: "5%", height: "1px", marginTop: "0px" }}
					/>
					<p className="lead text-muted">
						Quickly search for the exam of your choice.
					</p>
					<div className="container">
						<form>
							<div className="col-md-12 d-block mx-auto form-outline mt-3">
								<div className="input-group">
									<div className="form-border d-flex mx-auto">
										<input
											id="search-focus form1"
											type="search"
											placeholder="Search"
											className="form-control"
											onChange={(event) => setQuery(event.target.value)}
											value={query}
											style={{
												color: "white",
												borderTopRightRadius: "0px",
												borderBottomRightRadius: "0px",
											}}
										/>
										<button
											type="button"
											style={{
												borderTopLeftRadius: "0px",
												borderBottomLeftRadius: "0px",
											}}
											onClick={() => handleSearch}
											className="btn btn-primary btn-outline-white"
										>
											<i className="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row" style={{ marginTop: "-2rem" }}>
						{isLoading === true ? <Spinner /> : ""}
						{error === "" ? (
							<>
								{!isLoading ? (
									<ExamCard
										exams={queryValue === "" ? exams : searchExam}
										query={queryValue}
									/>
								) : (
									""
								)}
							</>
						) : (
							<>{!isLoading ? <ErrorCard error={error} /> : ""}</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
