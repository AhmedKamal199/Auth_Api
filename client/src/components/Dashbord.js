import React from "react";

const Dashbord = () => {
  return (
    <div className="container">
      <h4>Dashboard</h4>
      <p className="token">no token present</p>
      <div className="result"></div>
      <button className="btn btn-block" id="data">
        get data
      </button>
    </div>
  );
};

export default Dashbord;
