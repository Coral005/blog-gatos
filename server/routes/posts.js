const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Obtener todas las publicaciones del blog
router.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en la base de datos');
      return;
    }
    res.json(results);  // Enviar los resultados en formato JSON
  });
});

module.exports = router;
