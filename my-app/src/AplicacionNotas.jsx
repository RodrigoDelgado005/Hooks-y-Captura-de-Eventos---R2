import React, { useState, useEffect } from 'react';
import '../src/CSS/AplicacionNotas.css';

const AplicacionNotas = () => {
    // Este estado manejar el contenido de la nota y el estado de guardado
    const [nota, setNota] = useState('');
    const [guardando, setGuardando] = useState(false);

    // Esto hace que despues de un tiempo de inactividad, se guarde automaticamente la nota
    useEffect(() => {
        // Se establece un temporizador para guardar la nota
        const tiempo = setTimeout(() => {
            if(nota){
                console.log('Nota guardada', nota);
                setGuardando(true);
            }
        }, 10000);

        // Se reinicia el temporizador si el usuario sigue escribiendo
        setGuardando(false);
        return () => clearTimeout(tiempo);
    }, [nota]);
    
    // Muestra por pantalla un area de texto, el cual al pasar un cierto tiempo aparecera un mensaje de que la nota se esta guardando
    return(
        <div className='notas'>
            <h1>Bloc de Notas</h1>
            <textarea value={nota} onChange={(e) => setNota(e.target.value)} placeholder='Escribe una Nota...'></textarea>
            {guardando && <p>Guardando Nota...</p>}
        </div>
    )
}

export default AplicacionNotas;