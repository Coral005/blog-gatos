import React from 'react';
import productphoto1 from '../images/3427-0_0_g.jpg'; 
import productphoto2 from '../images/187843-7613035442535frangoecen_0_g.png';
import productphoto3 from '../images/80665_pla_cpl_vetoquinol_ipakitine_180g_1_jpg_5.jpg';
import productphoto4 from '../images/501950_catit_cuisine_stew_packaging_chicken_tuna_hs_04_3.jpg';
import productphoto5 from '../images/Hills_comida_gatos_prescription_diet_food_sensitivities_pato_HIL603926_new.webp';
import productphoto6 from '../images/E5a093ebea555412082fb410cc0f1422c1.jpg_720x720q75.avif';
import productphoto7 from '../images/71OOLbSYKhL._AC_SX679_.jpg';
import productphoto8 from '../images/75989_pla_biovirgincoconutoil_hs_01_8.jpg';
import productphoto9 from '../images/82025_pla_cosequin_advance_katze_45kapseln_hs_01_6.jpg';
import productphoto10 from '../images/pt0101_grande.webp';

function Feeding() {
  return (
    <div>
      <h1>Necesidades nutricionales de los gatos persas</h1>
      <p>Las necesidades nutricionales dependen de muchos factores, como la edad, actividad física, etc. La energía que contiene el alimento es la suma de proteína, grasa e hidratos de carbono. Son animales carnívoros, por lo cual sus necesidades se basan en proteínas, aminoácidos esenciales, grasa, ácidos grasos, hidratos de carbono, vitaminas y minerales.</p>

      <h2>Proteína</h2>
      <p>La proteína es el nutriente más importante para los gatos persas. En su alimentación diaria, como el pienso seco, debe tener al menos el 30% de proteína y complementarlo con comida húmeda. En el caso de que el gato lleve una dieta más natural, hecha en casa, debe tener al menos un 90% de proteína, dejando el porcentaje restante para las frutas y verduras si fuera necesario. Pero estos últimos alimentos son opcionales.</p>

      <p>A continuación os vamos a poner un ejemplo de piensos y complementos ricos en proteínas:</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto1} alt="Royal Canin Pienso Esterilizado" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Royal Canin Pienso Esterilizado</h4>
          <p>Este pienso está diseñado para gatos esterilizados y contiene un 37% de proteína.</p>
          <a href="https://www.royalcanin.com/es" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>

        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto2} alt="Latas gourmet" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Latas Gourmet</h4>
          <p>Estas latas gourmet están diseñadas para ofrecer una dieta variada y deliciosa a tu gato persa.</p>
          <a href="https://www.kiwoko.com" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>
      </div>

      <h2>Aminoácidos esenciales</h2>
      <p>Tenemos dos aminoácidos que son esenciales para la alimentación de los gatos, la arginina y la taurina.</p>
      <ul>
        <li>La arginina es fundamental para eliminar el amoniaco que puede provocar intoxicación letal en pocas horas.</li>
        <li>La taurina puede dañar al corazón, aparatos reproductivos o degenerar la retina.</li>
      </ul>
      <p>Ambos los podemos encontrar en la carne, a continuación os muestro alimentos ricos en aminoácidos.</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto3} alt="IPAKITINE" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Complemento alimenticio para perros y gatos</h4>
          <p>Complemento alimenticio para perros y gatos con insuficiencia renal crónica.</p>
          <a href="https://www.vetoquinol.com" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>

        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto4} alt="CATIT" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Complemento alimenticio para gatos</h4>
          <p>Complemento alimenticio para gatos, rico en carne, mucho líquido y con taurina natural.</p>
          <a href="https://www.catit.com" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>
      </div>

      <h2>Grasas</h2>
      <p>La grasa es otro aspecto importante a la hora de nutrir a nuestros pequeños, al menos el 9% de las calorías de un gato adulto deben provenir de la grasa presente en la carne, aunque lo normal sería que el porcentaje estuviera entre el 15% y el 20%, ya que la energía proviene de las proteínas y grasas de las que se alimentan y son fundamentales para la absorción de vitaminas.</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto5} alt="Hills Comida para gatos" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Hills Comida para gatos</h4>
          <p>Comida especializada para gatos con sensibilidad alimentaria, rica en pato.</p>
          <a href="https://www.hillspet.com" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>

        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto6} alt="Aceite de salmón para perros y gatos" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Aceite de salmón para perros y gatos</h4>
          <p>Aceite rico en grasas.</p>
          <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>
      </div>

      <h2>Vitaminas</h2>
      <p>Las vitaminas son fundamentales para las funciones vitales de los gatos. Las más importantes son:</p>
      <ul>
        <li>Vitamina A: muy importante para la visión.</li>
        <li>Vitaminas C, E y beta caroteno: antioxidantes importantes para regenerar las células y prevenir el envejecimiento.</li>
      </ul>
      <p>A continuación os mostramos alimentos ricos en vitaminas:</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto7} alt="Omegor Pet" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Omegor Pet</h4>
          <p>Rico en omega-3 y antioxidantes.</p>
          <a href="https://www.amazon.es" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>

        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto8} alt="Aceite de coco para perros y gatos" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Aceite de coco</h4>
          <p>Aceite de coco 100% natural y ecológico.</p>
          <a href="https://www.zooplus.es" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>
      </div>

      <h2>Minerales</h2>
      <p>Minerales como el calcio, fósforo, magnesio, etc., son esenciales para complementar las necesidades alimenticias de nuestros pequeños.</p>
      <p>A continuación os mostramos alimentos ricos en minerales:</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto9} alt="Cosequin Advanced" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Cosequin Advanced</h4>
          <p>Condroprotector rico en minerales.</p>
          <a href="https://www.zooplus.es" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>

        <div style={{ textAlign: 'center', flex: '1 1 45%' }}>
          <img src={productphoto10} alt="Pet Naturals" style={{ width: '30%', borderRadius: '8px' }} />
          <h4>Pet Naturals</h4>
          <p>Pienso rico en minerales esenciales.</p>
          <a href="https://www.petherbsdirect.com" target="_blank" rel="noopener noreferrer">Ver producto</a>
        </div>
      </div>
    </div>
  );
}

export default Feeding;


