import React, { useState, useEffect } from "react";
import url from "../../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const history = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Msg, setmsg] = useState("");
  const [isAuthenticated, Authenticate] = useState(false);

  useEffect(() => {
    document.title = "Login";
    if(isAuthenticated){
      history("/")
    }
  }, [isAuthenticated]);
  const onSumbit = async e =>{
    e.preventDefault();
    console.log("onsum")
    try{
      const data = await axios.post(`${url}/auth/login`,{
        email,
        password
      });
      console.log("after sum")
      localStorage.setItem('token', data.data.token);
      const token = localStorage.getItem('token');
      console.log(token);
      Authenticate(true);
    }catch(error){
      console.log(error);
      console.log(error.response.data.msg);
      setmsg(error.response.data.msg);
    }
  }
  return (
    <form className="form contact-form">
      <h5>Login</h5>
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
      <button type="submit" className="btn btn-block" onClick={onSumbit}>
        submit
      </button>
    </form>
  );
};

export default Login;
