// NavBar.js

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicio", "sobre-nosotros", "contacto"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 50 && bottom >= 50) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "#27242A",
      }}
    >
      <Container>
        <Navbar.Brand href="#" className="p-2">
          <img
            src="/navlogo.png"
            alt="InkFlow Services Logo"
            className="logo-image"
            style={{
              width: "100px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            setShowNavLinks(!showNavLinks);
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <>
              <Nav.Link
                id="inicio-link"
                onClick={() => handleNavLinkClick("inicio")}
                className={`nav-link ${activeSection === "inicio" ? "active" : ""}`}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                id="servicio-link"
                onClick={() => handleNavLinkClick("servicio")}
                className={`nav-link ${activeSection === "servicio" ? "active" : ""}`}
              >
                Servicio
              </Nav.Link>
              <Nav.Link
                id="sobre-nosotros-link"
                onClick={() => handleNavLinkClick("sobre-nosotros")}
                className={`nav-link ${activeSection === "sobre-nosotros" ? "active" : ""}`}
              >
                Sobre nosotros
              </Nav.Link>
              <Nav.Link
                id="contacto-link"
                onClick={() => handleNavLinkClick("contacto")}
                className={`nav-link ${activeSection === "contacto" ? "active" : ""}`}
              >
                Contacto
              </Nav.Link>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
