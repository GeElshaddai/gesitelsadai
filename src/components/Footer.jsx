import { Container } from "react-bootstrap";
import styles from "@assets/styles.module.css";
import ContactButtons from "@cores/ContactButtons";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <div className="d-flex justify-content-center justify-content-md-between align-items-center">
          <div>
            <span className={styles.footerText}>2026 &#x7c; Gesit Elsadai</span>
          </div>
          <div className="d-none d-md-flex">
            <ContactButtons
              buttonStyle={styles.footerButton}
              iconStyle={styles.footerButtonIcon}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
