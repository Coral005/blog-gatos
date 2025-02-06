import React from 'react';
import backgroundImage from '../assets/images/coral.jpeg'; // Asegúrate de que la ruta es correcta
import '../App.css';  // Importa los estilos globales

const PersianWorld = () => {
  return (
    <div
      className="background-landing"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1>Bienvenido a Persian World</h1>
        <p>Explora el mundo de los gatos persas con nosotros.</p>
      </div>
    </div>
  );
};

export default PersianWorld;
