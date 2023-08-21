import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container
      fluid
      className="home-page d-flex justify-content-center align-items-center"
      style={{
        fontFamily: "Raleway",
        letterSpacing: 1,
        fontSize: 25,
        background: "#F4E7D5",
        height: "90vh",
      }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <img
            src="/logo2.svg"
            alt="InkFlow Services Logo"
            className="logo-image"
          />
          <p className="company-description mt-5">
            Tu socio confiable en mantenimiento y preparación de equipos de
            impresión. Con sede en San Miguel y alcance nacional.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
