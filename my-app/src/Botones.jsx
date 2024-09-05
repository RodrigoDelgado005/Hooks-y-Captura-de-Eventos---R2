import React from "react";
import "../src/CSS/Botones.css";

const Botones = () => {
  // Esto maneja el click simple o doble, cada uno mostrara un mensaje diferente.
  const eventoClick = () => alert("¡Hiciste click!");
  const eventoDobleClick = () => alert("¡Hiciste doble click!");

  // Mostrara por pantalla tres botones, los cuales cada uno tendra un efecto diferente.
  return (
    <div className="container">
      <h1>Explora los Botones</h1>
      <div className="botones">
        <button
          id="boton1"
          onClick={eventoClick}
          onDoubleClick={eventoDobleClick}
        >
          Click o Doble Click
        </button>

        <button id="boton2" onClick={eventoClick}>
          Un solo Click
        </button>

        <button id="boton3" onDoubleClick={eventoDobleClick}>
          Doble Click
        </button>
      </div>
    </div>
  );
};

export default Botones;
