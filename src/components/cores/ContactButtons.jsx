import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function ContactButtons({ contactButtonsWrap, buttonStyle, iconStyle }) {
  const buttonTargets = [
    { id: "github", icon: faGithub, link: "https://github.com/GeElshaddai" },
    {
      id: "instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/gesit_els25/",
    },
    {
      id: "linkedin-in",
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/in/gesit-elsadai",
    },
  ];

  function redirect(target) {
    const redirectTarget = buttonTargets.find((button) => button.id === target);

    if (redirectTarget && redirectTarget.link) {
      window.open(redirectTarget.link, "_blank");
    }
  }

  return (
    <Row xs="auto" className={contactButtonsWrap}>
      {buttonTargets.map((target) => (
        <Col key={target.id}>
          <button
            type="button"
            className={buttonStyle}
            onClick={() => redirect(target.id)}
          >
            <FontAwesomeIcon icon={target.icon} className={iconStyle} />
          </button>
        </Col>
      ))}
    </Row>
  );
}

export default ContactButtons;
