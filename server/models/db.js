import mysql from 'mysql';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // Si no tienes contraseña, deja esto vacío
  database: process.env.DB_NAME || 'blog_gatos'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    process.exit(1);
  } else {
    console.log('✅ Conexión exitosa a la base de datos');
  }
});

// Exportar la conexión
export default connection;
