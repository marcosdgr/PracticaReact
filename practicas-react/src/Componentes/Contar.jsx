import React, { useState } from "react";

const Contar = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState(false);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const handleMostrar = () => {
    setMensaje(true);
  };

  const handleOcultar = () => {
    setMensaje(false);
  };
  return (
    <div>
      {contador}
      <br />
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <br />
      {!mensaje && <button onClick={handleMostrar}>Mostrar mensaje</button>}
      {mensaje && (
        <div>
          <h3>Hola Marcos</h3>
          <button onClick={handleOcultar}>Ocultar Mensaje</button>
        </div>
      )}
    </div>
  );
};

export default Contar;
