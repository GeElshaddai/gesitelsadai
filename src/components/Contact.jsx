import { Container, Row, Col } from "react-bootstrap";
import ContactButtons from "@cores/ContactButtons";
import RippleGrid from "@cores/RippleGrid";
import styles from "@assets/styles.module.css";

function Contact() {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <RippleGrid
            enableRainbow={false}
            gridColor="#00ffff"
            rippleIntensity={0.05}
            gridSize={15}
            gridThickness={20}
            mouseInteraction={false}
            mouseInteractionRadius={1.2}
            opacity={0.4}
          />
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Container style={{ textAlign: "center" }}>
              <Row>
                <Col md={{ span: 4, offset: 4 }}>
                  <span className={styles.contactIntro}>
                    Drop me a message. The ocean of ideas awaits!
                  </span>
                </Col>
              </Row>
              <ContactButtons
                contactButtonsWrap={styles.contactsButtonWrap}
                buttonStyle={styles.contactsButton}
                iconStyle={styles.contactsButtonIcon}
              />
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
