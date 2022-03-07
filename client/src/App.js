import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import Dashbord from "./components/Dashbord";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AppNavbar from "./components/AppNavbar";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes
} from "react-router-dom";

function App() {
  // const location = useLocation();
  const home = (
    <Fragment>
      <AppNavbar />
      <main>
        <Dashbord />
      </main>
    </Fragment>
  );
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={home} />
        <Route path="/Login"  element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
