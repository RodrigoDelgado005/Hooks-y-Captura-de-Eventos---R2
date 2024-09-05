import React, { useState } from "react";
import "../src/CSS/JuegoAdivinanza.css";

const JuegoAdivinanza = () => {
  // Este estado almacenara el numero aleatorio que se debera adivinar
  const [numeroAdivinar] = useState(Math.floor(Math.random() * 100) + 1);
  // Este Estado sera para el mensaje de resultado
  const [mensaje, setMensaje] = useState("");
  // Este estado sera para la entrada del usuario
  const [intento, setIntento] = useState("");

  // Esto controlara el envio del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    const numero = parseInt(intento);

    // Compara la entrada del usuario con el numero a adivinar y se muestra el mensaje segun corresponda.
    if (numero < numeroAdivinar) {
      setMensaje("Mas Alto");
    } else if (numero > numeroAdivinar) {
      setMensaje("Mas Bajo");
    } else {
      setMensaje("¡ADIVINASTE!");
    }
  };

  // Mostrara por pantalla un campo de entrada y el mensaje que corresponda a lo ingresado por el usuario.
  return (
    <div className="juego-container">
        <div className="juego">
            <h1>Adivina El Numero</h1>
            <form onSubmit={manejarEnvio}>
                <input
                    type="number"
                    value={intento}
                    onChange={(e) => setIntento(e.target.value)}
                ></input>
                <button type="submit">Adivinar</button>
            </form>
            <form>{mensaje && <p>{mensaje}</p>}</form>
        </div>
    </div>
  );
};

export default JuegoAdivinanza;
