import React, { useState, useEffect } from "react";
import url from "../../config";
// impor
const axios = require("axios");
const Register = ({ history }) => {
  useEffect(() => {
    document.title = "Register";

    if (isAuthenciated) {
      history.push("/");
    }
  }, [Authenticate]);
  const github = () => {
    console.log("From github");
    axios.get(`${url}/auth/register/github`);
  };
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Msg, setmsg] = useState("");
  const [isAuthenciated, Authenticate] = useState(false);

  const OnSumbit = async e => {
    e.preventDefault();
    try {
      const data = axios.post(
        `${url}/auth/register`,
        {
          name,
          email,
          password
        }.then(() => {
          localStorage.setItem("token", data.token);
          Authenticate(true);
        })
      );
    } catch (error) {
      setmsg(error.msg);
    }
  };

  return (
    <form className="form contact-form">
      <h1>
        <a href="#" onClick={github}>
          github
        </a>
      </h1>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>{Msg}</h1>
      <br />
      <h5>Register</h5>
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input username-input"
          onChnage={e => setname(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input username-input"
          onChnage={e => setemail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-input password-input"
          onChnage={e => setpassword(e.target.value)}
        />
      </div>
      <div className="text-small form-alert">there was an error</div>
      <button type="submit" className="btn btn-block" OnClick={OnSumbit}>
        submit
      </button>
    </form>
  );
};

export default Register;
