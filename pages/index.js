import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import header from "../styles/header.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - FRC Team 2658</title>
        <meta
          name="description"
          content="Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics."
        />
      </Head>
      <Container>
        <Row>
          <Col>
            <div className={header.pageHeader}>
              <h1>Home</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
