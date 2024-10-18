// Importar las dependencias necesarias
const express = require('express');
const cors = require('cors');
const connection = require('./server/models/db'); // Ruta a tu archivo db.js para la conexión a la base de datos

const app = express();

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Permitir el uso de JSON en las solicitudes
app.use(express.json());

// Ruta para obtener la lista de gatos desde la base de datos
app.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts'; // Consulta SQL para obtener todos los gatos
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
    res.json(results); // Enviar los resultados en formato JSON
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(4000, () => {
  console.log('Servidor backend corriendo en el puerto 4000');
});
