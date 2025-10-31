import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (media) => setSelectedMedia(media);
  const closeModal = () => setSelectedMedia(null);

  return (
    <div className="gallery-page">
      {/* 🐱 Header llamativo */}
      <header className="gallery-header">
        <div className="overlay">
          <h1>🐾 Galería de Gatos Persas</h1>
          <p>
            Una colección de imágenes y videos que muestran la elegancia,
            ternura y encanto de nuestros gatos persas.
          </p>
        </div>
      </header>

      {/* 📸 Introducción */}
      <div className="gallery-introduction">
        <p>
          Disfruta de una selección especial de nuestros gatos mientras juegan,
          descansan o simplemente conquistan corazones 💜.  
          Haz clic en cualquier imagen o video para verlo en detalle.
        </p>
      </div>

      {/* 🖼️ Cuadrícula de galería */}
      <div className="gallery-grid">
        {/* Imágenes */}
        {[
          '/images/1733323378311.jpg',
          '/images/1733323378326.jpg',
          '/images/1733323378440.jpg',
          '/images/1733323378341.jpg',
          '/images/1733323378406.jpg',
          '/images/1733323378494.jpg',
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gato Persa ${i + 1}`}
            className="gallery-item"
            onClick={() => openModal(src)}
          />
        ))}

        {/* Videos */}
        {[
          '/videos/VID-20241020-WA0020.mp4',
          '/videos/VID-20241020-WA0019.mp4',
        ].map((src, i) => (
          <video
            key={`v${i}`}
            className="gallery-item"
            onClick={() => openModal(src)}
            muted
            loop
            autoPlay
          >
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        ))}
      </div>

      {/* 🔍 Modal mejorado */}
      {selectedMedia && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.endsWith('.mp4') ? (
              <video className="modal-media" controls autoPlay>
                <source src={selectedMedia} type="video/mp4" />
              </video>
            ) : (
              <img src={selectedMedia} alt="Gato Persa" className="modal-media" />
            )}
            <button className="close-button" onClick={closeModal}>
              ✖ Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
