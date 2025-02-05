import React, { useEffect } from 'react';
import './PersianWorld.css';
import '../App.css'; // Asegúrate de que la ruta sea correcta

function PersianWorld() {
  useEffect(() => {
    // Aplica la clase `background-landing` solo al entrar en Persian World
    document.body.classList.add('background-landing');

    // Limpieza: Quita la clase `background-landing` al salir de Persian World
    return () => {
      document.body.classList.remove('background-landing');
    };
  }, []);

  return (
    <div className="persian-world-content">
      <h1 className="persian-world-title">Bienvenidos a Persian World</h1>
    </div>
  );
}

export default PersianWorld;
