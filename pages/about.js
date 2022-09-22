import Head from 'next/head'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import header from "../styles/header.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - FRC Team 2658</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Container>
        <Row>
          <Col>
            <div className={header.pageHeader}>
              <h1>About Us</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}