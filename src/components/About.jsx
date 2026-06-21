import { Container, Row, Col } from "react-bootstrap";
import styles from "@assets/styles.module.css";
import AboutExperience from "@cores/AboutExperience";
import AboutCertificate from "@cores/AboutCertificate";

function About() {
  return (
    <section id="about" className={styles.about}>
      <Container className="py-5">
        <AboutExperience />
      </Container>

      <Container className={styles.aboutBoxes}>
        <Row>
          <Col className={styles.sectionTitle}>
            <h3>Education</h3>
          </Col>
        </Row>
        <Row xs="auto" md={2}>
          <Col className={styles.educationTitle}>
            Ship Engineer Class IV Certification
            <p style={{ fontSize: "1rem" }}>2025</p>
          </Col>
          <Col className={styles.educationDetails}>
            <ul>
              <li>Marine Engineering</li>
              <li>
                Implementation of MARPOL 73/78, SOLAS 74, and STCW 78 Amendment
                2010
              </li>
              <li>
                Controlling the operation of the ship and care for person on
                board
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className={styles.aboutBoxes}>
        <AboutCertificate />
      </Container>
    </section>
  );
}

export default About;
