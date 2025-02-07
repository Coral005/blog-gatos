import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import open from 'open';
import connection from './models/db.js' // ✅ Solo una vez index de server

const app = express();

// Habilitar CORS
app.use(cors());

// Permitir el uso de JSON en solicitudes
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(process.cwd(), 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Ruta para obtener datos de la base de datos
app.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error al ejecutar la consulta:', err);
      return res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
    res.json(results);
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});
