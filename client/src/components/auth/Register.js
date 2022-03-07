import React, { useState, useEffect } from "react";
const axios = require("axios");
const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });
  const github = () => {
    console.log("From github");
    axios.get("http://localhost:5000/api/auth/register/github");
  };
  return (
    <form className="form contact-form">
      <h1>
        <a href="#" onClick={github}>
          github
        </a>
      </h1>
      <br />
      <h5>Register</h5>
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input username-input" />
      </div>
      <div className="form-row">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input type="email" className="form-input username-input" />
      </div>

      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input type="password" className="form-input password-input" />
      </div>
      <div className="text-small form-alert">there was an error</div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};

export default Register;
