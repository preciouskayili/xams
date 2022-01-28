import React, { useState, useEffect } from "react";
import "./assets/css/search.css";

const Navbar = ({ isToggled, setIsToggled }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9000/examination/${query}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to search");
        }
        return res.json();
      })
      .then((data) => {
        setSearch(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="btn btn-dark btn-floating"
          onClick={() => setIsToggled(!isToggled)}
        >
          <i className={isToggled ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
        <div className="navbar-brand p-2 me-auto">Xams</div>
      </div>
    </nav>
  );
};

export default Navbar;
