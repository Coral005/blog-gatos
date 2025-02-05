import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Persian World</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/care">Cuidados</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feeding">Alimentación</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characteristics">Características</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Galería</Link>
            </li>
            {/* Más enlaces */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
