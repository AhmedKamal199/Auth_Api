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
  	document.title("Authentication App")
  	const token = localStorage.getItem("token")
  	console.log(token)
  	const {data} = await axios.get(`${url}/hel`,{
  	  		headers: {
  	  			"x-header-token" : token
  	  		}})
  	console.log(data.name);
  	setname(data.name);
  	aut(data.aut);
  }, []);

  const guset = (
  	<>
  		<NavItem>
            <NavLink href="/Register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Login">Login</NavLink>
          </NavItem>
  	</>
  	);
  const user = (
  	<>
  		<NavItem>
           Welcome {name}
          </NavItem>
  	</>
  	)

  return (
    // <Router>
    <Navbar color="black" dark expand="md">
      <NavbarBrand href="/">Authentication App</NavbarBrand>
      <NavbarToggler onClick={() => set(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav style={{ marginLeft: "auto", padding: "0 20px" }} navbar>
        {isAut ? user : guset}
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
