const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '8Og9gHnj.', // Asegúrate de usar la contraseña correcta
  database: 'blog_gatos' // El nombre exacto de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos con id:', connection.threadId);
});

module.exports = connection;
