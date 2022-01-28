import React from "react";
const ErrorCard = ({ error }) => {
  return (
    <div className="container">
      <div className="card bg-light rounded-lg">
        <div className="card-body">
          <h3>OOPS, An error occurred.</h3>
          <p>This service is unavailable while you are offline.</p>
          <small>{error}</small>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
