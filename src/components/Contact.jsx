import { Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container
      fluid
      className="contact-form d-flex flex-column align-items-center justify-content-center p-5 m-0"
      style={{
        fontFamily: "Raleway",
        letterSpacing: 1,
        fontSize: 16,
        background: "#ECD4C6",
      }}
    >
      <h1 style={{ color: "#27242A" }} className="text-center mb-4">
        Contáctanos
      </h1>
      <Row className="d-flex justify-content-center" style={{ width: "100%" }}>
        <Col md={4} className="mb-4">
          <div
            className="contact-card p-3"
            style={{
              backgroundColor: "#27242A",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ color: "#ECD4C6" }}>Información de Contacto</h4>
            <p style={{ color: "#fff" }}>
              Teléfono: 2626-2626 <br />
              Correo: inflow@services.es <br />
              Dirección: FR2M+99P, Avenida Jose Simeon Canas Sur, San Miguel
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center" style={{ width: "100%" }}>
        <Col md={4} className="mb-4">
          <div
            className="contact-card p-3"
            style={{
              backgroundColor: "#27242A",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ color: "#ECD4C6" }}>Formulario de Contacto</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" style={{ color: "#ECD4C6" }}>
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" style={{ color: "#ECD4C6" }}>
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" style={{ color: "#ECD4C6" }}>
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-light w-50"
                  style={{
                    backgroundColor: "#E3B155",
                    borderWidth: "0px",
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
