import React, { useState } from 'react';
import './ProductGuide.css';

const productsData = [
  {
    id: 1,
    name: "Pienso Premium Persa",
    description: "Pienso natural con proteínas y minerales esenciales para gatos persas. Favorece un pelaje brillante y una digestión saludable.",
    price: "30,99€",
    image: "/images/51rwc9aIk1L._AC_SL1280_.jpg",
    reviews: [
      { id: 1, author: "Juan", rating: 5, comment: "Excelente producto, mi gato lo ama." },
      { id: 2, author: "Ana", rating: 4, comment: "Muy bueno, pero el precio podría ser más bajo." },
    ],
  },
  {
    id: 2,
    name: "Bebedero Fuente",
    description: "Fuente automática de agua con filtro de carbón activo. Mantiene el agua limpia y fresca todo el día.",
    price: "7,99€",
    image: "/images/61zMX0Pm+FL._AC_SL1200_.jpg",
    reviews: [
      { id: 1, author: "Carlos", rating: 5, comment: "A mi gato le encanta este bebedero." },
      { id: 2, author: "María", rating: 3, comment: "Está bien, pero es un poco pequeño." },
    ],
  },
  {
    id: 3,
    name: "Limpiador lagrimal",
    description: "Producto vegano y natural para el cuidado ocular de los gatos persas. Reduce manchas y mantiene la higiene.",
    price: "8,99€",
    image: "/images/essential-eyecare-01-65645c13947f4_g.png",
    reviews: [
      { id: 1, author: "Luis", rating: 5, comment: "Muy eficaz y natural, mi gato está más saludable." },
      { id: 2, author: "Marta", rating: 4, comment: "Hace su trabajo, pero tiene un olor fuerte." },
    ],
  },
  {
    id: 4,
    name: "Arena Aglomerante Lavanda",
    description: "Arena con aroma natural a lavanda, 98% libre de polvo. Ideal para gatos sensibles.",
    price: "15,99€",
    image: "/images/2-64aff62a328af.png",
    reviews: [
      { id: 1, author: "Pedro", rating: 4, comment: "Excelente calidad, pero un poco cara." },
      { id: 2, author: "Elena", rating: 5, comment: "La mejor arena que he probado para mis gatos." },
    ],
  },
  {
    id: 5,
    name: "Champú Hidratante Natural",
    description: "Champú vegano con 90% de ingredientes naturales. Ideal para mantener el pelaje sedoso y libre de impurezas.",
    price: "8,99€",
    image: "/images/Douxo-S3-Pyo-shampoo-668bfa2a02cf7_g.jpg",
    reviews: [
      { id: 1, author: "Ana", rating: 5, comment: "Deja el pelo de mi gato súper suave y brillante." },
      { id: 2, author: "Jose", rating: 4, comment: "Buen champú, aunque podría hacer más espuma." },
    ],
  },
];

function ProductGuide() {
  const [products, setProducts] = useState(productsData);

  const handleAddReview = (productId, newReview) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, reviews: [...p.reviews, newReview] } : p))
    );
  };

  const addReview = (productId) => {
    const name = prompt("Tu nombre:");
    const rating = parseInt(prompt("Calificación (1-5):"), 10);
    const comment = prompt("Tu comentario:");

    if (name && rating && comment) {
      const newReview = { id: Math.random(), author: name, rating, comment };
      handleAddReview(productId, newReview);
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="product-guide-page">
      {/* 🐾 Header elegante */}
      <header className="product-header">
        <div className="overlay">
          <h1>🛍️ Guía de Productos para Gatos Persas</h1>
          <p>
            Cuida a tu gato con los mejores productos seleccionados especialmente para su bienestar,
            comodidad y salud.
          </p>
        </div>
      </header>

      {/* 🐾 Galería de productos */}
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="product-price">{product.price}</p>

              {/* Reseñas */}
              <div className="reviews">
                <h3>Reseñas:</h3>
                {product.reviews.length === 0 ? (
                  <p>No hay reseñas todavía.</p>
                ) : (
                  product.reviews.map((review) => (
                    <div key={review.id} className="review">
                      <p>
                        <strong>{review.author}</strong> — {review.rating} ⭐
                      </p>
                      <p>{review.comment}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Botón de agregar reseña */}
              <button onClick={() => addReview(product.id)} className="add-review-button">
                ✍️ Agregar Reseña
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGuide;
