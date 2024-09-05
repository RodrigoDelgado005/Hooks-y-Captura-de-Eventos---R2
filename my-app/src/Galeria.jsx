import React, { useState, useEffect } from 'react';
import '../src/CSS/Galeria.css';

const Galeria = () => {
  // Rutas de las Imagenes Utilizadas
const imagenes = [
  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// Este estado controlara cual imagen se va a mostrar actualmente
const [indiceActual, setIndiceActual] = useState(0);

  // Esta Funcion cambiara la imagenes basandose en las teclas presionadas
  const manejarTeclas = (event) => {
    if (event.key === 'ArrowRight') {
      setIndiceActual((indiceActual + 1) % imagenes.length);
      // Avanza a la siguiente imagen
    } else if (event.key === 'ArrowLeft') {
      setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length);
      // Retrocede a la imagen anterior
    }
  };

  // Esto manejara los eventos del teclado
  useEffect(() => {
    window.addEventListener('keydown', manejarTeclas);
    return () => window.removeEventListener('keydown', manejarTeclas);
  }, [indiceActual]);

  // Se mostrara por pantalla la galeria de imagenes con la imagen actual
  return (
    <>
    <div className="galeria">
      <h1>Galeria de Imagenes</h1>
      <p>Desliza las Imagenes Utilizando las Flechas</p>
    </div>
    <div className="imagen-container">
      <img src={imagenes[indiceActual]} alt="Galería" className="imagen" />
    </div>
    </>
  );
};

export default Galeria;