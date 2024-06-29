// este es el authmiddleware

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/constants');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    console.log('Token no proporcionado');
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log('Token inválido');
      return res.status(401).json({ message: 'Token inválido' });
    }
    req.user = decoded;
    console.log(`Usuario autenticado: ${decoded.username}`);
    next();
  });
}

module.exports = {
  verifyToken,
};
