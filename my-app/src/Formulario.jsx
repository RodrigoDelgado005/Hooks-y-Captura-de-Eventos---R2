import React, { useState } from "react";
import "../src/CSS/Formulario.css";

const Formulario = () => {
  // Estados que manejaran los valores de entrada y los errores
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errores, setErrores] = useState({});

  // Estas funciones validaran los campos segun las condiciones de cada uno.
  const validarNombre = (nombre) => {
    return nombre.length > 2 ? "" : "El nombre debe tener mas de dos caracteres";
  };

  const validarEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email) ? "" : "El correo electrónico no es valido";
  };

  const validarContraseña = (contraseña) => {
    return contraseña.length >= 4 ? "" : "La contraseña debe tener al menos 4 caracteres";
  };

  // Controla los cambios en los campos del formulario
  const manejarCambios = (e) => {
    const { name, value } = e.target;

    const validacion = {
      nombre: validarNombre,
      email: validarEmail,
      contraseña: validarContraseña,
    };

    const setters = {
      nombre: setNombre,
      email: setEmail,
      contraseña: setContraseña,
    };

    // Actualiza los errores y los valores de los campos segun su nombre
    setErrores({ ...errores, [name]: validacion[name](value) });
    setters[name](value);
  };


  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // Verifica si hay errores antes de mostrar la alerta
    if (Object.values(errores).every(error => error === '')) {
      alert('Formulario enviado');
    }
  };

  // Mostrara por pantalla el formulario con los mensajes de error segun corresponda en cada campo
  return (
    <div className="container">
      <form className="formulario " onSubmit={manejarEnvio}>
      <h1>Registro de personas</h1>
        <br></br>
        <b>Nombre</b>
        <input
          name="nombre"
          value={nombre}
          onChange={manejarCambios}
          placeholder="Nombre"
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <br></br>
        <b>Email</b>
        <input
          name="email"
          type="email"
          value={email}
          onChange={manejarCambios}
          placeholder="Correo Electrónico"
        />
        {errores.email && <p className="error">{errores.email}</p>}

        <br></br>
        <b>Contraseña</b>
        <input
          name="contraseña"
          type="password"
          value={contraseña}
          onChange={manejarCambios}
          placeholder="Contraseña"
        />
        {errores.contraseña && <p className="error">{errores.contraseña}</p>}
        <br></br>
        <button type="submit" className="boton">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
