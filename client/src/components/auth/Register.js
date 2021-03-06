import React, { useState, useEffect } from "react";
import url from "../../config";
// impor
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const history = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Msg, setmsg] = useState("");
  const [isAuthenticated, Authenticate] = useState(false);
  useEffect(() => {
    document.title = "Register";
  },[]);
  const github = () => {
    console.log("From github");
    axios.get(`${url}/auth/register/github`);
  };

  const OnSumbit = async e => {
    // axios.post().then(

    // ).catch(

    // )
    // try {
    //   cnost result = await axios.post()
    // } catch (error) {

    // }

    e.preventDefault();
    try {
      console.log("Onsubmit");
      const data = await axios.post(`${url}/auth/register`, {
        name,
        email,
        password
      });
      console.log("After post");
      localStorage.setItem("token", data.token);
      Authenticate(true);
      history("/")
      console.log(isAuthenticated);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
      setmsg(error.response.data.msg);
    }
  };

  return (
    <form className="form contact-form">
      <h1>
        <a href="#" onClick={github}>
          github
        </a>
      </h1>
      <h1 style={{ color: "red" }}>{Msg}</h1>
      <br />
      <h5>Register</h5>
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input username-input"
          onChange={e => setname(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input username-input"
          onChange={e => setemail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-input password-input"
          onChange={e => setpassword(e.target.value)}
        />
      </div>
      <div className="text-small form-alert">there was an error</div>
      <button type="submit" className="btn btn-block" onClick={OnSumbit}>
        submit
      </button>
    </form>
  );
};

export default Register;
