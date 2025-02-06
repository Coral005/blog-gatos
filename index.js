import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import open from 'open';
import connection from './server/models/db.js'; // Asegúrate de que tu archivo db.js esté configurado correctamente

const app = express();

// Habilitar CORS
app.use(cors());

// Permitir el uso de JSON para solicitudes POST o PUT
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(process.cwd(), 'public')));

// Ruta principal para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Ruta dinámica para obtener datos desde la base de datos (ejemplo: /posts)
app.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts'; // Cambia "posts" por tu tabla en la base de datos
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
    res.json(results); // Devuelve los resultados como JSON
  });
});

// Iniciar el servidor en el puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

