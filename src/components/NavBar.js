import React from "react";
import "./css/navbar.css";
import image from "./img/petHeaven_logo.png";
// import { Nav } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {Button, Menu, MenuItem} from '@mui/material';

const NavBar = () => {
  return (
    <>
    
    <header className="header">
      <Link to="/" className="logo">
        <img src={image} alt="Pet Heaven Logo"/>
      </Link>
      {/* <Navbar> */}
        <div className="navbar" expand="lg">
          <container>
            {/* <Navbar.Brand href="/">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/view">View Pets</Nav.Link>
                <Nav.Link href="/releaseform">Release Pets</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse> */}
            {/* <Dropdownmenu/> */}
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          {/* <Link to="/view">View Pets</Link> */}
          <Link to="/releaseform">Release Pets</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">Signup</Link>
          </container>
          
        </div>
      {/* </Navbar> */}
      </header>
      </>
    
  );
};

export default NavBar;