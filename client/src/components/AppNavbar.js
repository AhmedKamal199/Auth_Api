import React, { useState, useEffect, Fragment } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Container
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Login from "./auth/Login";
import  url  from "../config";
const AppNavbar = () => {
  const [isOpen, set] = useState(false);
  const [name, setname] = useState('');
  const [isAut, aut] = useState(false);
  useEffect( async() => {
  	if(isAut){
      document.title = "Authentication App"
    }
  	const token = localStorage.getItem("token")
  	console.log(token)
  	const {data} = await axios.get(`${url}/hel`,{
  	  		headers: {
  	  			Authorization : `Bearer ${token}`
  	  		}})
  	console.log(data.name);
  	setname(data.name);
  	aut(data.aut);
  }, [isAut]);
  function logout(){
    localStorage.removeItem("token")
    aut(false)
    console.log("success")
  }
  const guset = (
  	<>
  		<NavItem>
            <NavLink style={{color:"white"}} href="/Register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:"white"}} href="/Login">Login</NavLink>
          </NavItem>
  	</>
  	);
  const user = (
  	<>
  		<NavItem>
           <NavLink style={{color:"white"}} href="#">Welcome {name} </NavLink>
          </NavItem>
  	</>
  	)

  return (
    // <Router>
    <Navbar color="black" dark expand="md">
      <NavbarBrand href="/" style= {{fontSize :"1.5rem"}}>Authentication App</NavbarBrand>
      <NavbarToggler onClick={() => set(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav style={{ marginLeft: "auto", padding: "0 20px" }} navbar>
        {isAut ? user : guset}
          <NavItem >
            <NavLink style={{color:"white"}} href="#">About</NavLink>
          </NavItem>
          {isAut && <NavItem>
            <NavLink style={{color:"white"}} href="#" onClick={logout}>Logout</NavLink>
          </NavItem> }
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
