import React, { useState, useEffect } from 'react';
import '../src/CSS/AplicacionNotas.css';

const AplicacionNotas = () => {
    // Estados para manejar el contenido de la nota, el estado de guardado y la última nota guardada
    const [nota, setNota] = useState('');
    const [guardando, setGuardando] = useState(false);
    const [ultimaNotaGuardada, setUltimaNotaGuardada] = useState('');

    // Esto hace que despues de un tiempo de inactividad, se guarde automaticamente la nota
    useEffect(() => {
        // Se establece un temporizador para guardar la nota
        const tiempo = setTimeout(() => {
            if(nota){
                console.log('Nota guardada', nota);
                setGuardando(true);
                setUltimaNotaGuardada(nota); // Guarda la nota
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
            {ultimaNotaGuardada && (
                <div className='nota-guardada'>
                    <h2>Última Nota Guardada:</h2>
                    <p>{ultimaNotaGuardada}</p>
                </div>
            )}
        </div>
    )
}

export default AplicacionNotas;