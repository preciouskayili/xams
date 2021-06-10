import React from "react";
import moment from "moment";
import {NavLink} from "react-router-dom";

const TestCards = ({ testDetail }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h4>{testDetail.title}</h4>
          <p>{moment(testDetail.createdAt).format('MMM, DD YYYY')}</p>
          <NavLink to={`/examination/${testDetail._id}`} className="btn btn-dark btn-rounded">Take test {">>"}</NavLink>

          <div className="card-footer mt-3">
            <span className="bg-primary text-white p-1 rounded">Physics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCards;
