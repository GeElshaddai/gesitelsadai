import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faShip,
  faGears,
  faUsersGear,
  faSailboat,
  faStethoscope,
  faFireExtinguisher,
  faBriefcaseMedical,
  faEye,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@assets/styles.module.css";
import GlareHover from "@cores/GlareHover";
import { GetImgPng, GetImgJpg } from "@cores/GetImg";
import FadeContent from "@cores/FadeContent";

function About() {
  const exps = [
    {
      title: "Web Development",
      content: (
        <ul>
          <li>Framework/libraries : ReactJS, Django</li>
          <li>DBMS : MySQL, SQLite</li>
          <li>Languages : Javascript, Python, PHP</li>
        </ul>
      ),
    },
    {
      title: "Kitchen Staff",
      content: (
        <ul>
          <li>Ingredients preparations</li>
          <li>Implemented FIFO and FEFO procedures</li>
          <li>Collaborated with cross-functional teams</li>
        </ul>
      ),
    },
    {
      title: "Warehouse Staff",
      content: (
        <ul>
          <li>FIFO procedures implementation</li>
          <li>Ensuring the inventory items are in the best condition</li>
          <li>Implemented planned maintenance system</li>
        </ul>
      ),
    },
    {
      title: "Ship Engineering Cadet",
      content: (
        <ul>
          <li>Assisting engineers in various projects onboard</li>
          <li>Adherence to engineering standards and regulations</li>
          <li>Gaining hands-on experience of vessel operations</li>
        </ul>
      ),
    },
  ];

  const imocerts = [
    { title: "eng-iv", icon: faGears },
    { title: "erm", icon: faUsersGear },
    { title: "scrb", icon: faSailboat },
    { title: "mc", icon: faStethoscope },
    { title: "aff", icon: faFireExtinguisher },
    { title: "mfa", icon: faBriefcaseMedical },
    { title: "sat", icon: faEye },
    { title: "bst", icon: faShieldHalved },
  ];

  const ibmcerts = [
    {
      img: "data-fundamentals",
      link: "https://www.credly.com/badges/1ceed3d0-49c8-4610-9cc2-1519de8615af/public_url",
      alt: "Data Fundamentals",
    },
    {
      img: "digital-literacy",
      link: "https://www.credly.com/badges/96dec135-d7c6-4c2e-9f7e-c8fda0b039d8/public_url",
      alt: "Digital Literacy",
    },
    {
      img: "digital-mindset",
      link: "https://www.credly.com/badges/919ec838-5054-4778-b048-ee378346eaa8/public_url",
      alt: "Digital Mindset",
    },
    {
      img: "explore-emerging-tech",
      link: "https://www.credly.com/badges/4c335ca0-367e-430f-9ef0-050cba61a29f/public_url",
      alt: "Explore Emerging Tech",
    },
    {
      img: "ai-literacy",
      link: "https://www.credly.com/badges/c40b096a-e706-481a-be71-f1c107f15340/public_url",
      alt: "AI Literacy",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let switchOp;

  switch (openIndex) {
    case 1:
      switchOp = { img: "p_cook", altImg: "Freepik : Cooking" };
      break;
    case 2:
      switchOp = {
        img: "p_warehouse",
        altImg: "Freepik : Warehouse Operation",
      };
      break;
    case 3:
      switchOp = { img: "p_engineering", altImg: "Freepik : Ship" };
      break;

    default:
      switchOp = { img: "p_programming", altImg: "Freepik : Web Development" };
      break;
  }

  return (
    <section id="about" className={styles.about}>
      <Container className="py-5">
        <FadeContent delay={150}>
          <Row>
            <Col className={styles.sectionTitle}>
              <h2>What have I done?</h2>
              <h3>Experiences</h3>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mt-4">
            <Col md={8}>
              <div>
                {exps.map((item, index) => (
                  <div className={`${styles.experiencesBox}`} key={index}>
                    <button
                      onClick={() => handleClick(index)}
                      className={styles.experiencesButton}
                    >
                      {item.title}
                      <span>
                        {openIndex === index ? (
                          <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                          <FontAwesomeIcon icon={faAngleDown} />
                        )}
                      </span>
                    </button>
                    {openIndex === index && <div>{item.content}</div>}
                  </div>
                ))}
              </div>
            </Col>
            <Col
              md={4}
              className="d-none d-md-flex justify-content-center align-items-center"
            >
              <img
                loading="lazy"
                src={GetImgJpg(`${switchOp.img}`)}
                className={styles.experiencesImg}
                alt={switchOp.altImg}
              />
            </Col>
          </Row>
        </FadeContent>
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
                Controlling the operation of the ship and care for person on
                board
              </li>
            </ul>
          </Col>
        </Row>
        <Row xs="auto" md={2}>
          <Col className={styles.educationTitle}>
            SMK P Nasional Purwokerto
            <p style={{ fontSize: "1rem" }}>2019-2022</p>
          </Col>
          <Col className={styles.educationDetails}>
            <ul>
              <li>Engine and auxiliary system maintenance & repair</li>
              <li>Understanding the piping systems on board the ship</li>
              <li>
                Implementation of MARPOL 73/78, SOLAS 74, and STCW 78 Amendment
                2010
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className={styles.aboutBoxes}>
        <Row>
          <Col className={styles.sectionTitle}>
            <h3>Certifications</h3>
          </Col>
        </Row>
        <Row xs={2} lg={5}>
          {imocerts.map((imo, index) => (
            <Col key={index} className="mt-4">
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
        <Row xs={2} md={5}>
          {ibmcerts.map((ibm, index) => (
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
                    src={GetImgPng(`${ibm.img}`)}
                    className={styles.glareHoverImg}
                    alt={ibm.alt}
                  />
                </GlareHover>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default About;
