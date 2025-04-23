import React from "react";
import Card from "react-bootstrap/Card";


const MainHome = ({ misDatos }) => {
  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center"
        }}
      >
        <img
          src={misDatos.imagen}
          alt="Foto 1"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0"
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem"
            }}
          >
            {misDatos.nombre} {misDatos.apellido}
          </Card.Title>
          <Card.Text
            style={{
              color: "#555",
              fontSize: "1rem",
              marginBottom: "1.5rem",
              lineHeight: "1.6"
            }}
          >
            Estudiante de programación de la FRT UTN.
            <ul style={{ listStyleType: "none", padding: "0", marginTop: "1rem" }}>
              Lenguajes
              <li>{misDatos.lenguajes[0]}</li>
              <li>{misDatos.lenguajes[1]}</li>
              <li>{misDatos.lenguajes[2]}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainHome;
