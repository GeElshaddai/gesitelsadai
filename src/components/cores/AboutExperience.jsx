import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import styles from "@assets/styles.module.css";
import { GetImgJpg } from "@cores/GetImg";
import { exps } from "@cores/AboutData";
import FadeContent from "@cores/FadeContent";

function AboutExperience() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let switchOp;

  switch (openIndex) {
    case 1:
      switchOp = {
        img: "p_cook",
        altImg: "Freepik : Cooking",
        loadImg: "lazy",
      };
      break;
    case 2:
      switchOp = {
        img: "p_warehouse",
        altImg: "Freepik : Warehouse Operation",
        loadImg: "lazy",
      };
      break;
    case 3:
      switchOp = {
        img: "p_engineering",
        altImg: "Freepik : Ship",
        loadImg: "lazy",
      };
      break;

    default:
      switchOp = {
        img: "p_programming",
        altImg: "Freepik : Web Development",
        loadImg: "lazy",
      };
      break;
  }

  return (
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
            loading={switchOp.loadImg}
            src={GetImgJpg(`${switchOp.img}`)}
            className={styles.experiencesImg}
            alt={switchOp.altImg}
          />
        </Col>
      </Row>
    </FadeContent>
  );
}

export default AboutExperience;
