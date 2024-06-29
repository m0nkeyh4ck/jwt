//este es el usercontroller

function protectedRoute(req, res) {
  res.json({ message: 'Ruta protegida alcanzada', user: req.user });
}

module.exports = {
  protectedRoute,
};
