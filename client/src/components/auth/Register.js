import React, { useState, useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });
  return (
    <form className="form contact-form">
      <h1>
        <a>github</a>
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
