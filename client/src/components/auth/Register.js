import React, { useState, useEffect } from "react";
import url from "../../config";
// impor
import axios from "axios";
const Register = ({ history }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Msg, setmsg] = useState("");
  const [isAuthenticated, Authenticate] = useState(false);
  useEffect(() => {
    document.title = "Register";
    console.log(isAuthenticated);
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);
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
      localStorage.setItem("token", data.token);
      Authenticate(true);
      console.log(isAuthenticated);
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
