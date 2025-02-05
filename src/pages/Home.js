import React, { useEffect } from 'react';  // Asegúrate de que useEffect esté importado
import './Home.css';  // Importar el archivo CSS de Home

function Home() {
  useEffect(() => {
    // Quitar background-landing y agregar background-home en la página Home
    document.body.classList.remove('background-landing');
    document.body.classList.add('background-home');
    
    // Limpiar al salir de la página Home
    return () => {
      document.body.classList.remove('background-home');
    };
  }, []);

  return (
    <div className="home-page">
      <h1>Bienvenidos a Persian World</h1>
      <p>El lugar para aprender todo sobre los gatos persas. Explora cuidados, alimentación, características, y mucho más.</p>
      <p>Bienvenidos a Gatos Persas Dinámicos</p>
      <p>En esta página, descubrirás el maravilloso mundo de los gatos persas.</p>

      <p>Seguramente os preguntaréis, ¿Qué encontraré en este blog?</p>
      <p>En este blog, nos apasionan estos felinos y todo lo que les rodea. A continuación te explico qué veremos en las siguientes páginas:</p>

      <ul>
        <li>Caracteristicas</li>
        <li>Cuidado y Mantenimiento</li>
        <li>Personalidad y Comportamiento</li>
        <li>Alimentación</li>
        <li>Imágenes de nuestros gatos persas</li>
        <li>Productos imprescindibles</li>
      </ul>

      <p>
        Esperamos que disfrutes de este blog y que encuentres información útil, consejos y curiosidades para conocer mejor a estos felinos. ¡Acompáñanos en esta aventura para descubrir más sobre estos nobles y encantadores gatos persas!
      </p>
    </div>
  );
}

export default Home;  // Asegúrate de exportar el componente como default

