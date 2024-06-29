// este es mi app.js

const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Rutas públicas
app.post('/generateToken', authController.generateToken);

// Rutas protegidas
app.get('/protected', authMiddleware.verifyToken, userController.protectedRoute);

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Hubo un problema en el servidor' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
