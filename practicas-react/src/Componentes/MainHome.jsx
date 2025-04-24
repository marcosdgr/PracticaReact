import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../css/MainHome.css"

const MainHome = ({ misDatos }) => {
  const [masInfo, setMasInfo] = useState(false);

  const handleMostrar = () => {
    setMasInfo(true);
  };

  const handleCerrar = () => {
    setMasInfo(false);
  };

  return (
    <div className="main-container">
      <Card className="main-card">
        <img
          src={misDatos.imagen}
          alt="Foto 1"
          className="main-card-img"
        />
        <Card.Body>
          <Card.Title className="main-card-title">
            {misDatos.nombre} {misDatos.apellido}
          </Card.Title>
          <Card.Text className="main-card-text">
            <hr />
            Estudiante de programación de la FRT UTN.
            <hr />
            <ul className="main-card-list">
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
        <div className="main-info">
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

