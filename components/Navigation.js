import Image from "next/future/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

import styles from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <Navbar
      sticky="top"
      bg="light"
      variant="light"
      collapseOnSelect
      expand="md"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt=""
            src="logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          FRC Team 2658
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/sponsors">Sponsors</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className={styles.social}>
            <Nav.Link href="https://www.facebook.com/frcteam2658/">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/frcteam2658/">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/user/team2658">
              <FaYoutube />
            </Nav.Link>
            <Nav.Link href="https://www.github.com/frc-emotion">
              <FaGithub />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
