import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container
      fluid
      className="services d-flex flex-column align-items-center justify-content-center p-5 m-0"
      style={{
        fontFamily: "Raleway",
        letterSpacing: 1,
        fontSize: 16,
        background: "#F4E7D5",
      }}
    >
      <h1 style={{ color: "#27242A" }} className="text-center m-4">
        Sobre nosotros
      </h1>
      <div className="col-8">
        <h2 style={{ color: "#27242A" }} className="text-center m-4">
          Valores
        </h2>
        <p
          style={{ color: "#27242A", background: "#E3B155" }}
          className="p-3 rounded"
        >
          <legend>Integridad</legend> Actuar de manera ética y transparente en
          todas nuestras interacciones, manteniendo la confianza de nuestros
          clientes y socios.
        </p>
        <p
          style={{ color: "#27242A", background: "#E3B155" }}
          className="p-3 rounded"
        >
          <legend>Adaptabilidad:</legend> Estamos dispuestos a enfrentar cambios
          y desafíos con flexibilidad, ajustándonos a las necesidades cambiantes
          de la industria y nuestros clientes.
        </p>
        <p
          style={{ color: "#27242A", background: "#E3B155" }}
          className="p-3 rounded"
        >
          <legend>Atención Personalizada:</legend> Entendemos las necesidades
          únicas de cada cliente y brindamos soluciones adaptadas a sus
          requerimientos específicos.
        </p>
        <p
          style={{ color: "#27242A", background: "#E3B155" }}
          className="p-3 rounded"
        >
          <legend>Dedicación:</legend> Nos esforzamos por ir más allá para
          garantizar la satisfacción de nuestros clientes y la eficiencia de sus
          equipos.
        </p>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 col-sm-8">
          <h2 style={{ color: "#27242A" }} className="text-center m-4">
            Misión
          </h2>
          <p
            style={{ color: "#27242A", background: "#E3B155" }}
            className="p-3 rounded"
          >
            En InkFlow Services, nuestra misión es ser el referente en El
            Salvador para el mantenimiento y reparación de equipos de impresión.
            Guiados por los valores de integridad y adaptabilidad, nos
            comprometemos a brindar soluciones técnicas excepcionales mientras
            mantenemos una conducta ética y transparente en cada interacción.
            Nuestra atención personalizada nos permite comprender las
            necesidades únicas de cada cliente y adaptar nuestras soluciones en
            consecuencia.
          </p>
        </div>
        <div className="col-12 col-md-4 col-sm-8">
          <h2 style={{ color: "#27242A" }} className="text-center m-4">
            Visión
          </h2>
          <p
            style={{ color: "#27242A", background: "#E3B155" }}
            className="p-3 rounded"
          >
            Nos visualizamos como la empresa líder en mantenimiento y reparación
            de equipos de impresión en El Salvador. Deseamos ser la elección
            natural para las empresas de impresión en la región, gracias a
            nuestra capacidad para adaptarnos a los cambios y desafíos de manera
            ágil y proactiva. A medida que crecemos, seguimos dedicados a ser un
            socio confiable y comprometido que garantice que cada equipo
            funcione a su máximo potencial, respaldado por la satisfacción y el
            éxito duradero de nuestros clientes.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
