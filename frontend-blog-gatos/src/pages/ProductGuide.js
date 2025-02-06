import React, { useState } from 'react';
import './ProductGuide.css';

// Lista de productos con sus respectivas reseñas
const productsData = [
  {
    id: 1,
    name: "Producto 1",
    description: "Este es un producto increíble para el cuidado de tu gato persa, con unos minerales y proteínas imprescindibles para ellos.",
    price: "30,99€",
    image: "/images/51rwc9aIk1L._AC_SL1280_.jpg", // Ruta desde public/images
    reviews: [
      { id: 1, author: "Juan", rating: 5, comment: "Excelente producto, mi gato lo ama." },
      { id: 2, author: "Ana", rating: 4, comment: "Muy bueno, pero el precio podría ser más bajo." },
    ],
  },
  {
    id: 2,
    name: "Bebedero",
    description: "Bebedero para gatos",
    price: "7,99€",
    image: "/images/61zMX0Pm+FL._AC_SL1200_.jpg", // Ruta desde public/images
    reviews: [
      { id: 1, author: "Carlos", rating: 5, comment: "A mi gato le encanta este bebedero." },
      { id: 2, author: "María", rating: 3, comment: "Está bien, pero es un poco pequeño." },
    ],
  },
  {
    id: 3,
    name: "Limpiador lagrimal",
    description: "Limpiador lagrimal para gatos, producto vegano y blanqueante",
    price: "8,99€",
    image: "/images/essential-eyecare-01-65645c13947f4_g.png", // Ruta desde public/images
    reviews: [
      { id: 1, author: "Luis", rating: 5, comment: "Muy eficaz y natural, mi gato está más saludable." },
      { id: 2, author: "Marta", rating: 4, comment: "Hace su trabajo, pero tiene un olor fuerte." },
    ],
  },
  {
    id: 4,
    name: "Advance arena para gatos",
    description: "Arena aglomerante con olor a lavanda, 98% de producto natural y no genera polvo.",
    price: "15,99€",
    image: "/images/2-64aff62a328af.png", // Ruta desde public/images
    reviews: [
      { id: 1, author: "Pedro", rating: 4, comment: "Excelente calidad, pero un poco cara." },
      { id: 2, author: "Elena", rating: 5, comment: "La mejor arena que he probado para mis gatos." },
    ],
  },
  {
    id: 5,
    name: "Champú hidratante",
    description: "Champú hidratante vegano para perros y gatos con 90% ingredientes naturales y 0% parabenos, siliconas, aceites minerales, Kathon, sulfatos.",
    price: "8,99€",
    image: "/images/Douxo-S3-Pyo-shampoo-668bfa2a02cf7_g.jpg", // Ruta desde public/images
    reviews: [
      { id: 1, author: "Ana", rating: 5, comment: "Deja el pelo de mi gato súper suave y brillante." },
      { id: 2, author: "Jose", rating: 4, comment: "Buen champú, aunque me gustaría que fuera más espumoso." },
    ],
  },
];

function ProductGuide() {
  const [products, setProducts] = useState(productsData);

  const handleAddReview = (productId, newReview) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId
          ? { ...product, reviews: [...product.reviews, newReview] }
          : product
      );
    });
  };

  const addReview = (productId) => {
    const name = prompt("Tu nombre:");
    const rating = parseInt(prompt("Calificación (1-5):"), 10);
    const comment = prompt("Tu comentario:");

    if (name && rating && comment) {
      const newReview = {
        id: Math.random(),
        author: name,
        rating: rating,
        comment: comment,
      };

      handleAddReview(productId, newReview);
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="product-guide-page">
      <h1>Guía de Productos</h1>
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>

            {/* Mostrar reseñas */}
            <div className="reviews">
              <h3>Reseñas:</h3>
              {product.reviews.length === 0 ? (
                <p>No hay reseñas para este producto.</p>
              ) : (
                product.reviews.map((review) => (
                  <div key={review.id} className="review">
                    <p><strong>{review.author}</strong> - {review.rating} ⭐</p>
                    <p>{review.comment}</p>
                  </div>
                ))
              )}
            </div>

            {/* Botón para agregar una reseña */}
            <button onClick={() => addReview(product.id)} className="add-review-button">
              Agregar Reseña
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGuide;
