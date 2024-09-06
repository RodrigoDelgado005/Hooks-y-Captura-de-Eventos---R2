import React, { useState } from "react";
import "../src/CSS/Botones.css";

const Botones = () => {
  // Estado para manejar el color y el tamaño de los botones
  const [colorBoton4, setColorBoton4] = useState("#ff5733");
  const [tamañoBoton5, setTamañoBoton5] = useState("10px");
  const [estiloBoton6, setEstiloBoton6] = useState({ backgroundColor: "#5DADE2", fontSize: "15px" });

  // Esto maneja el click simple o doble, cada uno mostrara un mensaje diferente.
  const eventoClick = () => alert("¡Hiciste click!");
  const eventoDobleClick = () => alert("¡Hiciste doble click!");
  const cambiarColor = () => setColorBoton4(colorBoton4 === "#f0f0f0" ? "#4caf50" : "#f0f0f0");
  const cambiarTamaño = () => setTamañoBoton5(tamañoBoton5 === "25px" ? "20px" : "15px");
  const cambiarEstilo = () => setEstiloBoton6({
    backgroundColor: estiloBoton6.backgroundColor === "#f0f0f0" ? "#ff5722" : "#f0f0f0",
    fontSize: estiloBoton6.fontSize === "25px" ? "25px" : "20px"
  });

  // Mostrara por pantalla tres botones, los cuales cada uno tendra un efecto diferente.
  return (
    <div className="container">
      <h1>Explora los Botones</h1>
      <div className="botones">
        <button
          id="boton1" onClick={eventoClick} onDoubleClick={eventoDobleClick}>
          Click o Doble Click
        </button>

        <button id="boton2" onClick={eventoClick}>
          Un solo Click
        </button>

        <button id="boton3" onDoubleClick={eventoDobleClick}>
          Doble Click
        </button>

        <button id="boton4" onClick={cambiarColor} style={{ backgroundColor: colorBoton4 }}>
          Cambiar Color
        </button>

        <button id="boton5" onDoubleClick={cambiarTamaño} style={{ fontSize: tamañoBoton5 }}>
          Cambiar Tamaño
        </button>

        <button id="boton6" onDoubleClick={cambiarEstilo} style={estiloBoton6}>
          Color y Tamaño
        </button>
      </div>
    </div>
  );
};

export default Botones;
