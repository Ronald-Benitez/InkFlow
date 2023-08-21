import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container
      fluid
      className="home-page p-5"
      style={{
        fontFamily: "Raleway",
        letterSpacing: 1,
        fontSize: 16,
        background: "#F4E7D5",
        height: "100vh",
      }}
    >
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center pt-5">
          <img
            src="/logo2.svg"
            alt="InkFlow Services Logo"
            className="logo-image"
          />
          <p className="company-description">
            Tu socio confiable en mantenimiento y preparación de equipos de
            impresión. Con sede en San Miguel y alcance nacional.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
