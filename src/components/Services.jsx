
import { BiPrinter, BiWrench, BiPalette, BiCut, BiCube } from "react-icons/bi";
import { VscCircuitBoard } from "react-icons/vsc";
import { FiTruck } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
    const services = [
        {
          icon: <BiPrinter />,
          title: "Máquinas de Impresión",
          description: `Ofrecemos un mantenimiento preventivo personalizado diseñando planes específicos según las necesidades de cada cliente, tomando en cuenta su volumen de impresión y entorno de trabajo.
            Además, evaluamos y ajustamos la configuración de impresión para mejorar la eficiencia y calidad. Mantenemos los equipos actualizados con las últimas mejoras de software para un rendimiento óptimo.`,
        },
        {
          icon: <BiPalette />,
          title: "Máquinas de Impresión UVI",
          description: `Realizamos calibración de colores de manera periódica para garantizar una reproducción precisa y consistente. También nos encargamos del mantenimiento de lámparas UVI, sustituyéndolas y ajustándolas para un curado uniforme y de alta calidad.`,
        },
        {
          icon: <BiCut />,
          title: "Plotter de Corte",
          description: `Ofrecemos capacitación personalizada para los usuarios del plotter, optimizando su operación y minimizando errores. Suministramos y reemplazamos componentes desgastados como correas y poleas para mantener la precisión de corte.`,
        },
        {
          icon: <VscCircuitBoard />,
          title: "Mesas de Corte y Fresadoras",
          description: `Actualizamos y optimizamos el software de control para aprovechar al máximo las capacidades de corte y fresado. También proporcionamos soporte técnico remoto para resolver problemas menores y brindar orientación técnica a los usuarios.`,
        },
        {
          icon: <BiCube />,
          title: "Equipo de Impresión 3D",
          description: `Nos ocupamos de la limpieza y el mantenimiento regular de boquillas y extrusores para prevenir obstrucciones y mejorar la calidad de impresión. Calibramos periódicamente la plataforma de impresión 3D para garantizar una adherencia adecuada.`,
        },
        {
          icon: <FiTruck />,
          title: "Servicio de Recolección y Entrega",
          description: `Ofrecemos un servicio de recolección y entrega para los equipos que requieran mantenimiento, brindando mayor comodidad a nuestros clientes.`,
        },
        {
          icon: <BiWrench />,
          title: "Programa de Fidelidad",
          description: `Implementamos un programa de recompensas para nuestros clientes frecuentes, incluyendo descuentos en servicios y repuestos como parte de nuestra filosofía de servicio.`,
        },
      ];
      

  return (
    <Container
      fluid
      className="services d-flex flex-column align-items-center justify-content-center p-5 m-0"
      style={{
        fontFamily: "Raleway",
        letterSpacing: 1,
        fontSize: 16,
        background: "#ECD4C6",
      }}
    >
      <h1 style={{ color: "#27242A" }} className="text-center mb-4">
        Servicios brindados
      </h1>
      <Row className="d-flex justify-content-center">
        {services.map((service, index) => (
          <Col
            key={index}
            md={6}
            lg={4}
            className="mb-4 d-flex"
          >
            <div
              className="service-card p-3"
              style={{
                backgroundColor: "#27242A",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="service-icon mb-3 d-flex justify-content-center align-items-center p-2"
                style={{ fontSize: "60px", color: "#E3B155" }}
              >
                {service.icon}
              </div>
              <h3 className="service-title" style={{ color: "#ECD4C6" }}>
                {service.title}
              </h3>
              <p className="service-description" style={{ color: "#fff" }}>
                {service.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
