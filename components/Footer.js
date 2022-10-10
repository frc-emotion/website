import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col>
        <h1 className={styles.footerName}>Team Σ-Motion</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className={styles.address}>13010 Paseo Lucido, San Diego, CA, 92128</p>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}
