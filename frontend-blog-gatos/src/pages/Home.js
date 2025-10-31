import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    document.body.classList.remove('background-landing');
    document.body.classList.add('background-home');

    return () => {
      document.body.classList.remove('background-home');
    };
  }, []);

  return (
    <div className="home-page">
      {/* 🐾 Header con fondo visual */}
      <header className="home-header">
        <div className="overlay">
          <h1>🐱 Bienvenidos a <span>Persian World</span></h1>
          <p>
            Tu rincón felino para conocer y cuidar mejor a los gatos persas.  
            Aprende sobre su carácter, cuidados, alimentación y curiosidades.
          </p>
        </div>
      </header>

      <main className="home-content">
        <h2>Explora el Mundo de los Gatos Persas</h2>
        <p>
          Este blog está dedicado a los amantes de los gatos persas. Aquí
          descubrirás todo sobre sus características, alimentación, salud
          y comportamiento.
        </p>

        <ul>
          <li>✨ Características</li>
          <li>🧴 Cuidado y mantenimiento</li>
          <li>💜 Personalidad y comportamiento</li>
          <li>🍗 Alimentación</li>
          <li>📸 Galería</li>
          <li>🛍️ Productos imprescindibles</li>
        </ul>

        <button className="cta-button">Descubre más</button>
      </main>

      <footer className="home-footer">
        <p>© 2025 Persian World — Todos los derechos reservados 🐾</p>
      </footer>
    </div>
  );
}

export default Home;
