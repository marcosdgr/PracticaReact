import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const MainHome = ({ misDatos }) => {
  const [masInfo, setMasInfo] = useState(false);

  const handleMostrar = () => {
    setMasInfo(true);
  };

  const handleCerrar = () => {
    setMasInfo(false);
  };
  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <img
          src={misDatos.imagen}
          alt="Foto 1"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            {misDatos.nombre} {misDatos.apellido}
          </Card.Title>
          <Card.Text
            style={{
              color: "#555",
              fontSize: "1rem",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
            }}
          >
            <hr />
            Estudiante de programación de la FRT UTN.
            <hr />
            <ul
              style={{ listStyleType: "none", padding: "0", marginTop: "1rem" }}
            >
              Lenguajes:
              {misDatos.lenguajes.map((lenguaje, index) => (
                <li key={index}>{lenguaje}</li>
              ))}
            </ul>
            <hr />
            <button type="button" onClick={handleMostrar}>
              Mas sobre mi
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
      {masInfo && (
        <div>
          <h2>Más información sobre mí</h2>
          <p>
            Hola! mi nombre es {misDatos.nombre} {misDatos.apellido}, soy
            estudiante de programación y estoy en constante aprendizaje. Me
            gusta resolver problemas y trabajar en equipo.
          </p>
          <button onClick={handleCerrar}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default MainHome;
