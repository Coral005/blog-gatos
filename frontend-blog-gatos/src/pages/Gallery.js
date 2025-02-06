import React, { useState } from 'react'; // Importa 'useState' aquí
import './Gallery.css';  // Importar el archivo CSS de la galería

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
          ¡Bienvenidos a la galería de gatos persas!<br />
          Aquí podrás ver imágenes y videos muy adorables de nuestros gatos.
          Disfruta viendo cómo se relajan, juegan y se divierten.
          Haz clic en las imágenes o videos para verlos en detalle.
        </p>
      </div>

      <div className="gallery">
        {/* Imágenes de la galería */}
        <img
          src="/images/1733323378311.jpg"
          alt="Gato Persa 1"
          className="gallery-image"
          onClick={() => openModal('/images/1733323378311.jpg')} // Al hacer clic, abre el modal con la imagen
        />
        <img
          src="/images/1733323378326.jpg"
          alt="Gato Persa 2"
          className="gallery-image"
          onClick={() => openModal('/images/1733323378326.jpg')}
        />
        <img
          src="/images/1733323378440.jpg"
          alt="Gato Persa 3"
          className="gallery-image"
          onClick={() => openModal('/images/1733323378440.jpg')}
        />
        <img
          src="/images/1733323378341.jpg"
          alt="Gato Persa 4"
          className="gallery-image"
          onClick={() => openModal('/images/1733323378341.jpg')}
        />
        <img
          src="/images/1733323378406.jpg"
          alt="Gato Persa 5"
          className="gallery-image"
          onClick={() => openModal('/images/1733323378406.jpg')}
        />
        <img
          src="/images/1733323378494.jpg"
          alt="Gato Persa 6"
          className="gallery-image"
          onClick={() => openModal('/images/1733323378494.jpg')}
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
