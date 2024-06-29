// este es el authcontroller
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/constants');

function generateToken(req, res) {
  const { id, username, isAdmin } = req.body;

  if (!id || !username) {
    return res.status(400).json({ message: 'Se requieren id y username' });
  }

  let expiresIn = '2m';
  if (isAdmin) {
    expiresIn = '30m'; // Ejemplo de token más largo para administradores
  }

  const token = jwt.sign({ id, username, isAdmin }, SECRET_KEY, { expiresIn });
  console.log(`Token generado para usuario ${username}`);

  res.json({ token });
}

module.exports = {
  generateToken,
};
