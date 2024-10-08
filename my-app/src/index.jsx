import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css';
import App from '../src/CSS/App.css';
import reportWebVitals from './reportWebVitals';
import Galeria from './Galeria';
import '../src/CSS/Galeria.css';
import Formulario from './Formulario';
import Botones from './Botones';
import JuegoAdivinanza from './JuegoAdivinanza'
import AplicacionNotas from './AplicacionNotas'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Galeria />
    <Formulario />
    <JuegoAdivinanza />
    <Botones />
    <AplicacionNotas />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
