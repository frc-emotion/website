// react
import React from "react";

// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// icons
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// styles
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" FRC Team 2658 "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="../">Home</Nav.Link>
              <Nav.Link href="../about">About</Nav.Link>
              <Nav.Link href="../sponsors">Sponsors</Nav.Link>
              <Nav.Link href="../events">Events</Nav.Link>
              <Nav.Link href="../contact">Contact</Nav.Link>
              <Nav.Link href="http://blog.team2658.org" target="_blank">
                Blog <FaExternalLinkAlt size={10} className="extLinkIcon" />
              </Nav.Link>
            </Nav>
            <Nav className="smicons">
              <Nav.Link href="https://www.facebook.com/frcteam2658/" target="_blank">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/frcteam2658/" target="_blank">
                <FaInstagram />
              </Nav.Link>
              <Nav.Link href="https://www.github.com/frc-emotion/" target="_blank">
                <FaGithub />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
