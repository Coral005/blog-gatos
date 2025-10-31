import React from 'react';
import './Feeding.css';

function Feeding() {
  return (
    <div className="feeding-page">
      {/* 🌈 Header */}
      <header className="feeding-header">
        <div className="overlay">
          <h1>🍽️ Necesidades Nutricionales de los Gatos Persas</h1>
          <p>
            Conoce los nutrientes esenciales que tu gato persa necesita para mantenerse sano,
            fuerte y lleno de energía. Desde proteínas hasta vitaminas y minerales.
          </p>
        </div>
      </header>

      {/* 💜 Contenido principal */}
      <main className="feeding-content">
        <section>
          <h2>🐟 Proteína</h2>
          <p>
            La proteína es el nutriente más importante para los gatos persas. En su alimentación diaria,
            el pienso seco debe tener al menos un 30% de proteína y complementarse con comida húmeda.
            En dietas naturales, se recomienda un 90% de proteína.
          </p>

          <div className="product-row">
            <div className="product-card">
              <img src="/images/3427-0_0_g.jpg" alt="Royal Canin Pienso Esterilizado" />
              <h4>Royal Canin Pienso Esterilizado</h4>
              <p>Pienso diseñado para gatos esterilizados con un 37% de proteína.</p>
              <a href="https://www.royalcanin.com/es" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>

            <div className="product-card">
              <img src="/images/187843-7613035442535frangoecen_0_g.png" alt="Latas gourmet" />
              <h4>Latas Gourmet</h4>
              <p>Latas diseñadas para ofrecer una dieta variada y deliciosa a tu gato persa.</p>
              <a href="https://www.kiwoko.com" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2>🧬 Aminoácidos esenciales</h2>
          <p>Los dos más importantes son la arginina y la taurina, fundamentales para su salud.</p>
          <ul>
            <li>La <strong>arginina</strong> ayuda a eliminar el amoniaco y prevenir intoxicaciones.</li>
            <li>La <strong>taurina</strong> protege el corazón, la vista y el sistema reproductivo.</li>
          </ul>

          <div className="product-row">
            <div className="product-card">
              <img src="/images/80665_pla_cpl_vetoquinol_ipakitine_180g_1_jpg_5.jpg" alt="IPAKITINE" />
              <h4>Complemento alimenticio Vetoquinol</h4>
              <p>Ideal para gatos con insuficiencia renal crónica.</p>
              <a href="https://www.vetoquinol.com" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>

            <div className="product-card">
              <img src="/images/501950_catit_cuisine_stew_packaging_chicken_tuna_hs_04_3.jpg" alt="CATIT" />
              <h4>Catit Cuisine Stew</h4>
              <p>Comida rica en carne, con taurina natural y alto contenido en líquidos.</p>
              <a href="https://www.catit.com" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2>🥩 Grasas</h2>
          <p>
            La grasa aporta energía y ayuda a absorber vitaminas. Un gato adulto necesita entre el 15%
            y el 20% de grasa en su dieta.
          </p>

          <div className="product-row">
            <div className="product-card">
              <img src="/images/Hills_comida_gatos_prescription_diet_food_sensitivities_pato_HIL603926_new.webp" alt="Hills Comida para gatos" />
              <h4>Hill’s Sensitive Diet</h4>
              <p>Comida especializada para gatos con sensibilidad alimentaria, rica en pato.</p>
              <a href="https://www.hillspet.com" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>

            <div className="product-card">
              <img src="/images/E5a093ebea555412082fb410cc0f1422c1.jpg_720x720q75.avif" alt="Aceite de salmón" />
              <h4>Aceite de salmón</h4>
              <p>Aceite natural rico en grasas saludables y omega 3.</p>
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2>🍊 Vitaminas</h2>
          <p>Son esenciales para mantener la visión, regenerar células y prevenir el envejecimiento.</p>
          <ul>
            <li>Vitamina A: mejora la visión.</li>
            <li>Vitaminas C, E y beta caroteno: antioxidantes naturales.</li>
          </ul>

          <div className="product-row">
            <div className="product-card">
              <img src="/images/71OOLbSYKhL._AC_SX679_.jpg" alt="Omegor Pet" />
              <h4>Omegor Pet</h4>
              <p>Rico en omega-3 y antioxidantes naturales.</p>
              <a href="https://www.amazon.es" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>

            <div className="product-card">
              <img src="/images/75989_pla_biovirgincoconutoil_hs_01_8.jpg" alt="Aceite de coco" />
              <h4>Aceite de coco</h4>
              <p>Aceite 100% natural y ecológico.</p>
              <a href="https://www.zooplus.es" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2>🧂 Minerales</h2>
          <p>El calcio, fósforo y magnesio son esenciales para fortalecer huesos y músculos.</p>

          <div className="product-row">
            <div className="product-card">
              <img src="/images/82025_pla_cosequin_advance_katze_45kapseln_hs_01_6.jpg" alt="Cosequin Advanced" />
              <h4>Cosequin Advanced</h4>
              <p>Suplemento rico en minerales, ideal para articulaciones.</p>
              <a href="https://www.zooplus.es" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>

            <div className="product-card">
              <img src="/images/pt0101_grande.webp" alt="Pet Naturals" />
              <h4>Pet Naturals</h4>
              <p>Pienso natural con minerales esenciales.</p>
              <a href="https://www.petherbsdirect.com" target="_blank" rel="noopener noreferrer">
                Ver producto
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Feeding;
