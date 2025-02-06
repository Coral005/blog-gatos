import express from 'express';
import cors from 'cors';
import connection from './models/db.js'; // Asegúrate de que la conexión a la base de datos esté bien configurada

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente! 🚀');
});

// Importar rutas (asegúrate de que el archivo posts.js existe en /routes)
import postsRoutes from './routes/posts.js';
app.use('/posts', postsRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
