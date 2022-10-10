import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeader from "../components/PageHeader";

import styles from "../styles/contactPage.module.css";
import rowStyles from "../styles/rows.module.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - FRC Team 2658</title>
      </Head>
      <PageHeader title="Contact Us" image="url(header-img/contact.jpg)" />
      <Container fluid>
        <Row className={rowStyles.secondaryRow} style={{ padding: "80px 0 40px 0" }}>
          <Col>
            <a href="mailto:frcteam2658@gmail.com" style={{ color: "#fff" }}>
              <h2 style={{ textAlign: "center" }}>frcteam2658@gmail.com</h2>
            </a>
            <p style={{ textAlign: "center" }}>Main Team Email</p>
          </Col>
        </Row>
        <Row
          style={{
            padding: "40px 10%",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <Col>
            <ContactForm />
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#000", paddingBottom: "100px" }}></Row>
      </Container>
    </>
  );
}
