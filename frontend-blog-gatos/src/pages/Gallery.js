import React, { useState } from 'react';  // Importa 'useState' aquí
import './Gallery.css';  // Importar el archivo CSS de la galería

// Importar las imágenes desde la carpeta src/images
import photo1 from '../images/1733323378311.jpg';
import photo2 from '../images/1733323378326.jpg';
import photo3 from '../images/1733323378440.jpg';
import photo4 from '../images/1733323378341.jpg';  // Nueva imagen
import photo5 from '../images/1733323378406.jpg';  
import photo6 from '../images/1733323378494.jpg';  // Nueva imagen

function Gallery() {
  // Estado para controlar la imagen o video seleccionado y si el modal está abierto o cerrado
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Función para abrir el modal y mostrar la imagen o video seleccionado
  const openModal = (media) => {
    setSelectedMedia(media);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="gallery-page">
      <h1>Galería de Gatos Persas</h1>

      {/* Introducción de texto */}
      <div className="gallery-introduction">
        <p>
          ¡Bienvenidos a la galeria de gatos persas!<p>
        </p> Aquí podrás ver imágenes y videos muy adorables de nuestros gatos.
          Disfruta viendo cómo se relajan, juegan y se divierten.
          Haz clic en las imágenes o videos para verlos en detalle.
        </p>
      </div>

      <div className="gallery">
        {/* Imágenes de la galería */}
        <img
          src={photo1}
          alt="Gato Persa 1"
          className="gallery-image"
          onClick={() => openModal(photo1)} // Al hacer clic, abre el modal con la imagen
        />
        <img
          src={photo2}
          alt="Gato Persa 2"
          className="gallery-image"
          onClick={() => openModal(photo2)}
        />
        <img
          src={photo3}
          alt="Gato Persa 3"
          className="gallery-image"
          onClick={() => openModal(photo3)}
        />
        <img
          src={photo4}
          alt="Gato Persa 4"
          className="gallery-image"
          onClick={() => openModal(photo4)}
        />
        <img
          src={photo5}
          alt="Gato Persa 5"
          className="gallery-image"
          onClick={() => openModal(photo5)}
        />
        <img
          src={photo6}
          alt="Gato Persa 6"
          className="gallery-image"
          onClick={() => openModal(photo6)}
        />
        
        {/* Videos de la galería */}
        <video className="gallery-video" controls onClick={() => openModal('/videos/VID-20241020-WA0020.mp4')}>
          <source src="/videos/VID-20241020-WA0020.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
        <video className="gallery-video" controls onClick={() => openModal('/videos/VID-20241020-WA0019.mp4')}>
          <source src="/videos/VID-20241020-WA0019.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </div>

      {/* Modal para mostrar la imagen o video en grande */}
      {selectedMedia && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.endsWith('.mp4') ? (
              <video className="modal-media" controls autoPlay>
                <source src={selectedMedia} type="video/mp4" />
                Tu navegador no soporta el formato de video.
              </video>
            ) : (
              <img src={selectedMedia} alt="Media seleccionada" className="modal-media" />
            )}
            <button className="close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
