import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top" style={{ backgroundColor: '#27242A' }}>
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Nav className="ml-auto" style={{ justifyContent: 'flex-start' }}>
        <Nav.Link onClick={() => scrollToSection('inicio')}>Inicio</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('servicio')}>Servicio</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('sobre-nosotros')}>Sobre nosotros</Nav.Link>
        <Nav.Link onClick={() => scrollToSection('contacto')}>Contacto</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
