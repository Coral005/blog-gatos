import React from 'react';
import './Characteristics.css';

function Characteristics() {
  return (
    <div className="characteristics-page">
      {/* 🐾 Header con mejor contraste */}
      <header className="characteristics-header">
        <div className="overlay">
          <h1>🐱 Características de los Gatos Persas</h1>
          <p>
            Conoce los rasgos únicos que hacen del gato persa una de las razas
            más queridas del mundo. Desde su aspecto majestuoso hasta su carácter tranquilo.
          </p>
        </div>
      </header>

      {/* ✨ Contenido principal */}
      <main className="characteristics-content">
        <section className="feature-card">
          <h2>1. Apariencia Física</h2>
          <p>
            Los gatos persas tienen una apariencia muy característica: nariz plana,
            pelaje largo y sedoso, ojos grandes y redondos, y cuerpo compacto con huesos fuertes.
          </p>
        </section>

        <section className="feature-card">
          <h2>2. Temperamento</h2>
          <p>
            Son gatos tranquilos, cariñosos y muy dóciles. Perfectos para un ambiente familiar
            o para convivir con otros animales de compañía.
          </p>
        </section>

        <section className="feature-card">
          <h2>3. Necesidades de Aseo</h2>
          <p>
            Su largo pelaje requiere cepillado diario y limpieza ocular frecuente.
            Mantener su higiene es clave para evitar enredos o irritaciones.
          </p>
        </section>

        <section className="feature-card">
          <h2>4. Salud</h2>
          <p>
            Son propensos a enfermedades respiratorias y renales. Las visitas veterinarias
            periódicas son esenciales para mantener su bienestar.
          </p>
        </section>

        <section className="feature-card">
          <h2>5. Actividad Física</h2>
          <p>
            Aunque son tranquilos, necesitan juegos y estimulación diaria para evitar
            el sobrepeso y mantener su musculatura en forma.
          </p>
        </section>
      </main>

      <footer className="characteristics-footer">
        <p>© 2025 Persian World — Dedicado a los amantes de los gatos persas 🐾</p>
      </footer>
    </div>
  );
}

export default Characteristics;
