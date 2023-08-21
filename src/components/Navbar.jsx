import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (sectionId) => {
    // Cambiar el color de todos los enlaces a #E3B155
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.style.color = "#E3B155";
    });

    // Cambiar el color del enlace seleccionado a #84B09B
    const selectedLink = document.querySelector(`#${sectionId}-link`);
    if (selectedLink) {
      selectedLink.style.color = "#84B09B";
    }

    // Desplazar a la sección correspondiente
    scrollToSection(sectionId);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      style={{
        backgroundColor: "#27242A",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Navbar.Brand href="#" className="p-2">
        Logo
      </Navbar.Brand>
      <Nav className="">
        <Nav.Link
          id="inicio-link"
          onClick={() => handleNavLinkClick("inicio")}
          className="nav-link"
          style={{ color: "#E3B155" }}
        >
          Inicio
        </Nav.Link>
        <Nav.Link
          id="servicio-link"
          onClick={() => handleNavLinkClick("servicio")}
          className="nav-link"
          style={{ color: "#E3B155" }}
        >
          Servicio
        </Nav.Link>
        <Nav.Link
          id="sobre-nosotros-link"
          onClick={() => handleNavLinkClick("sobre-nosotros")}
          className="nav-link"
          style={{ color: "#E3B155" }}
        >
          Sobre nosotros
        </Nav.Link>
        <Nav.Link
          id="contacto-link"
          onClick={() => handleNavLinkClick("contacto")}
          className="nav-link"
          style={{ color: "#E3B155" }}
        >
          Contacto
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
