import { Container, Row, Col } from "react-bootstrap";
import styles from "@assets/styles.module.css";
import ContactButtons from "@cores/ContactButtons";
import ScrollVelocityComponent from "@cores/ScrollVelocity";

function Home() {
  return (
    <section id="home" className={styles.home}>
      <Container>
        <Row>
          <Col>
            <span>Hi, I&apos;m Gesit Elsadai</span>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <span className={styles.jobTitle}>Ship Engineer</span>
          </Col>
          <Col lg="8">
            Enthusisatic about <span style={{ color: "aqua" }}>leveraging</span>{" "}
            my diverse skill set and experiences. Focus on innovation and
            reliability to create solutions that enhance vessel{" "}
            <span style={{ color: "aqua" }}>performance</span> and
            sustainability across the ocean.
          </Col>
        </Row>
        <Row className="mt-3 mt-lg-0">
          <Col>
            <ContactButtons
              buttonStyle={styles.homeButton}
              iconStyle={styles.homeButtonIcon}
            />
          </Col>
        </Row>
      </Container>
      <Container className={styles.scrollVelocityBox} fluid>
        <Container className={styles.scrollVelocity}>
          <ScrollVelocityComponent />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
