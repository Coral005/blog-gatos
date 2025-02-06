import express from 'express';
import db from '../models/db.js';  // Asegúrate de agregar la extensión .js
const router = express.Router();

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

export default router;  // Cambio aquí
