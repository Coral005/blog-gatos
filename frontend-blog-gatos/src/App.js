import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';  // Asegúrate de que el archivo CSS esté importado correctamente

// Importar las páginas desde la carpeta src/pages
import Characteristics from './pages/Characteristics';
import Gallery from './pages/Gallery';
import ProductGuide from './pages/ProductGuide';
import BehaviorAndCuriosities from './pages/BehaviorAndCuriosities';
import Feeding from './pages/Feeding';
import Diseases from './pages/Diseases';
import Home from './pages/Home';
import PersianWorld from './pages/PersianWorld';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers';  // Nueva importación

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Persian World</Link>
        </li>
        <li>
          <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}>Home</Link>
        </li>
        <li>
          <Link to="/characteristics" className={`nav-link ${location.pathname === '/characteristics' ? 'active' : ''}`}>Characteristics</Link>
        </li>
        <li>
          <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
        </li>
        <li>
          <Link to="/productguide" className={`nav-link ${location.pathname === '/productguide' ? 'active' : ''}`}>Product Guide</Link>
        </li>
        <li>
          <Link to="/behaviorandcuriosities" className={`nav-link ${location.pathname === '/behaviorandcuriosities' ? 'active' : ''}`}>Behavior and Curiosities</Link>
        </li>
        <li>
          <Link to="/feeding" className={`nav-link ${location.pathname === '/feeding' ? 'active' : ''}`}>Feeding</Link>
        </li>
        <li>
          <Link to="/diseases" className={`nav-link ${location.pathname === '/diseases' ? 'active' : ''}`}>Diseases</Link>
        </li>
        <li>
          <Link to="/questions-and-answers" className={`nav-link ${location.pathname === '/questions-and-answers' ? 'active' : ''}`}>Preguntas y Respuestas</Link> {/* Nueva ruta */}
        </li>
      </ul>
    </nav>
  );
}

function App() {
  useEffect(() => {
    // Agregar la clase "home" cuando estamos en la página Home
    document.body.classList.add('home');

    // Limpiar cuando salgamos de la página Home
    return () => {
      document.body.classList.remove('home');
    };
  }, []);  // Se ejecuta solo una vez al montar el componente

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PersianWorld />} />  {/* Página Persian World */}
        <Route path="/home" element={<Home />} />  {/* Página Home */}
        <Route path="/characteristics" element={<Characteristics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/productguide" element={<ProductGuide />} />
        <Route path="/behaviorandcuriosities" element={<BehaviorAndCuriosities />} />
        <Route path="/feeding" element={<Feeding />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/questions-and-answers" element={<QuestionsAndAnswers />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;