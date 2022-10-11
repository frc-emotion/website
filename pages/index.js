import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeader from "../components/PageHeader";

import rowStyles from "../styles/rows.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - FRC Team 2658</title>
        <meta
          name="description"
          content="Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics."
        />
      </Head>
      <PageHeader title="Home" image="url(header-img/home.jpg)" />
      <Container fluid>
        <Row className={rowStyles.secondaryRow}>
          <Col>
            <h2>Geared for the Future</h2>
            <p>
              We are a FRC Robotics team founded in 2008, by and for high school
              students. We are dedicated to giving students an experience that
              will help them in our ever-evolving world. We are a 100%
              student-run team, so students get the amazing opportunity to learn
              from their older peers and teammates. We show students what it&apos;s
              like to work on a project as a team, and how fun it is when the
              robot you built is the one that wins.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
