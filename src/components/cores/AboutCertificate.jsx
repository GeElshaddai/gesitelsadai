import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { imocerts, ibmcerts } from "@cores/AboutData";
import GlareHover from "@cores/GlareHover";
import { GetImgPng } from "@cores/GetImg";
import styles from "@assets/styles.module.css";

function AboutCertificate() {
  const [imoCertVisibility, setImoCertVisibility] = useState(5);

  const [ibmCertVisibility, setIbmCertVisibility] = useState(5);

  return (
    <>
      <Row>
        <Col className={styles.sectionTitle}>
          <h3>Certifications</h3>
        </Col>
      </Row>
      <Row xs={2} lg={5}>
        {imocerts.slice(0, imoCertVisibility).map((imo, index) => (
          <Col key={index} className="mt-4" style={{ height: "150px" }}>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                alginContent: "stretch",
                cursor: "default",
              }}
            >
              <div className={styles.imoCertItem}>
                <FontAwesomeIcon icon={faShip} />
              </div>
              <div className={styles.imoCertItem}>
                {imo.title.toLocaleUpperCase()}
              </div>
              <div className={styles.imoCertItem}>
                <FontAwesomeIcon icon={imo.icon} />
              </div>
            </GlareHover>
          </Col>
        ))}
      </Row>
      <Row className={styles.certVisibilityButton}>
        <Col>
          {imoCertVisibility < imocerts.length ? (
            <button onClick={() => setImoCertVisibility((prev) => prev + 5)}>
              Show more
            </button>
          ) : (
            <button
              onClick={() => {
                setImoCertVisibility(5);
              }}
            >
              Show less
            </button>
          )}
        </Col>
      </Row>
      <Row xs={2} lg={5}>
        {ibmcerts.slice(0, ibmCertVisibility).map((ibm, index) => (
          <Col key={index} className="mt-4">
            <a href={ibm.link} target="_blank">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <img
                  loading={ibm.loadImg}
                  src={GetImgPng(`${ibm.img}`)}
                  className={styles.glareHoverImg}
                  alt={ibm.alt}
                />
              </GlareHover>
            </a>
          </Col>
        ))}
      </Row>
      <Row className={styles.certVisibilityButton}>
        <Col>
          {ibmCertVisibility < ibmcerts.length ? (
            <button onClick={() => setIbmCertVisibility((prev) => prev + 5)}>
              Show more
            </button>
          ) : (
            <button
              onClick={() => {
                setIbmCertVisibility(5);
              }}
            >
              Show less
            </button>
          )}
        </Col>
      </Row>
    </>
  );
}

export default AboutCertificate;
