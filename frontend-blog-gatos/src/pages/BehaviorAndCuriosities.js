import React from 'react';
import './BehaviorAndCuriosities.css';

function BehaviorAndCuriosities() {
  return (
    <div className="behavior-curiosities-page">
      {/* 🌈 Header con fondo elegante */}
      <header className="behavior-header">
        <div className="overlay">
          <h1>🐾 Comportamientos y Curiosidades de los Gatos Persas</h1>
          <p>
            Descubre cómo se comportan estos adorables felinos y conoce datos curiosos
            sobre su historia, carácter y costumbres.
          </p>
        </div>
      </header>

      {/* 💜 Contenido principal */}
      <main className="behavior-content">
        <section className="behavior-section">
          <h2>😺 Comportamiento y Temperamento</h2>
          <p>
            Una de las características más reconocidas de los gatos persas es su tranquilidad.
            Son animales serenos que disfrutan del descanso y la comodidad. 
            A menudo se les encuentra tumbados en su rincón favorito, observando con calma el entorno.
          </p>
          <p>
            Aun así, son gatos afectuosos que disfrutan de la atención, los mimos y los momentos de juego.
            Suelen adaptarse fácilmente a distintos ambientes y son compañeros fieles y leales.
          </p>
        </section>

        <section className="behavior-section">
          <h2>🐕‍🦺 Interacción con Otros Animales</h2>
          <p>
            Los gatos persas suelen convivir muy bien con otros gatos e incluso con perros, 
            siempre que la presentación sea adecuada. Aunque son pacíficos, pueden ser territoriales,
            por lo que es importante introducir a nuevos compañeros de manera gradual y tranquila.
          </p>
        </section>

        <section className="behavior-section curiosities">
          <h2>🌟 Curiosidades</h2>
          <ul>
            <li>🐱 Es una de las razas de gatos más famosas del mundo.</li>
            <li>💤 Les encanta dormir… ¡y mucho! Pueden descansar más de 15 horas al día.</li>
            <li>🚢 Fueron traídos a Europa por comerciantes en el siglo XVII.</li>
            <li>🍽️ Son propensos a ganar peso, así que necesitan una dieta equilibrada.</li>
            <li>🏆 Participaron en la primera exposición felina oficial.</li>
            <li>🎨 Son protagonistas de “La mayor pintura de gatos” del mundo.</li>
          </ul>
        </section>
      </main>

      <footer className="behavior-footer">
        <p>© 2025 Persian World — Dedicado a los amantes de los gatos persas 🐾</p>
      </footer>
    </div>
  );
}

export default BehaviorAndCuriosities;
