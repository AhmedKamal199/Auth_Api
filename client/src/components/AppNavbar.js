import React, { useState } from "react";
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
import Login from "./auth/Login";
const AppNavbar = () => {
  const [isOpen, set] = useState(false);

  return (
    // <Router>
    <Navbar color="black" dark expand="md">
      <NavbarBrand href="/">Authentication App</NavbarBrand>
      <NavbarToggler onClick={() => set(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav style={{ marginLeft: "auto", padding: "0 20px" }} navbar>
          <NavItem>
            <NavLink href="/Register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
