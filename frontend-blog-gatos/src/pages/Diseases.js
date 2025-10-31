import React from 'react';
import './Diseases.css';

function Diseases() {
  return (
    <div className="diseases-page">
      {/* 🌈 HEADER */}
      <header className="diseases-header">
        <div className="overlay">
          <h1>💉 Enfermedades Comunes en los Gatos Persas</h1>
          <p>
            Aunque son gatos fuertes y tranquilos, los persas pueden sufrir ciertas enfermedades hereditarias o derivadas de su morfología. 
            Aquí te explicamos las más frecuentes y cómo prevenirlas.
          </p>
        </div>
      </header>

      {/* 💜 CONTENIDO PRINCIPAL */}
      <main className="diseases-content">
        <section className="disease-card">
          <h2>🧶 Tricobezoares</h2>
          <p>
            Los gatos persas son propensos a formar bolas de pelo en el estómago y el tracto digestivo debido a su largo pelaje. 
            Para prevenirlo, cepíllalo a diario y proporciónale malta para ayudar a eliminar el pelo ingerido.
          </p>
        </section>

        <section className="disease-card">
          <h2>🧫 Riñón Poliquístico (PKD)</h2>
          <p>
            Se trata de quistes renales hereditarios que pueden aumentar de tamaño y comprometer el funcionamiento de los riñones. 
            Afecta aproximadamente al 38% de los gatos persas. 
            Se recomienda realizar ecografías anuales, especialmente a partir de los 7 años.
          </p>
        </section>

        <section className="disease-card">
          <h2>🌬️ Problemas Respiratorios</h2>
          <p>
            Debido a su hocico chato, los gatos persas tienen vías respiratorias más estrechas, lo que puede dificultar su respiración. 
            Es importante mantener un peso adecuado y evitar ambientes con polvo o calor excesivo.
          </p>
        </section>

        <section className="disease-card">
          <h2>❤️ Problemas Cardíacos</h2>
          <p>
            La dificultad respiratoria puede derivar en afecciones cardíacas. 
            Los gatos obesos tienen un mayor riesgo. 
            La cardiomiopatía hipertrófica afecta principalmente a machos adultos, por lo que se recomiendan revisiones veterinarias regulares.
          </p>
        </section>

        <section className="disease-card">
          <h2>👁️ Problemas Oculares</h2>
          <p>
            La forma de sus ojos puede generar distintas afecciones oculares. 
            Entre las más comunes encontramos:
          </p>
          <ul>
            <li><strong>Anquilobléfaron congénito:</strong> unión parcial de los párpados al nacer.</li>
            <li><strong>Epífora congénita:</strong> lagrimeo excesivo que puede causar infecciones.</li>
            <li><strong>Entropión:</strong> las pestañas se doblan hacia adentro y rozan la córnea, provocando úlceras.</li>
            <li><strong>Glaucoma primario:</strong> aumento de la presión ocular que puede causar ceguera si no se trata.</li>
          </ul>
        </section>
      </main>

      <footer className="diseases-footer">
        <p>© 2025 Persian World — Información dedicada al bienestar de los gatos persas 🐾</p>
      </footer>
    </div>
  );
}

export default Diseases;
