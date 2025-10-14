import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "@assets/styles.module.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [opacity, setOpacity] = useState(0);
  const [backDrop, setBackDrop] = useState("");
  const [bottomLine, setBottomLine] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      const newOpacity = Math.min(0.3, (scrollY / maxScroll) * 0.3);
      setOpacity(newOpacity);
      setBackDrop("blur(10px)");
      setBottomLine("1px #1b2730 solid");

      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      setActiveLink(current);

      if (scrollY === 0) {
        setOpacity(0);
        setBackDrop("");
        setBottomLine("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    { link: "#home", title: "home" },
    { link: "#about", title: "about" },
    { link: "#contact", title: "contact" },
  ];
  return (
    <header>
      <Navbar
        style={{
          backgroundColor: `rgba(21, 27, 32, ${opacity})`,
          backdropFilter: `${backDrop}`,
          borderBottom: `${bottomLine}`,
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        className={styles.navBar}
        fixed="top"
        data-bs-theme="dark"
      >
        <Container className="d-flex justify-content-center">
          <Nav className="w-100 d-flex justify-content-around" id="navbar-spy">
            {navlinks.map((navlink) => (
              <a
                key={navlink.title}
                href={navlink.link}
                className={`nav-link ${
                  activeLink === navlink.title ? "active" : ""
                }`}
              >
                {navlink.title.charAt(0).toLocaleUpperCase() +
                  navlink.title.slice(1)}
              </a>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
