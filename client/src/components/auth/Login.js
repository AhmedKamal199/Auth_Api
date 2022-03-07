import React, { useState, useEffect } from "react";
const Login = () => {
  useEffect(() => {
    document.title = "Login";
  });
  return (
    <form className="form contact-form">
      <h5>Login</h5>
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

export default Login;
