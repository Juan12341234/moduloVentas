const ventasShema = require('../Model/ventasModel');

const ventas = {};

ventas.mostrarVentas = (req, res) => {
    ventasShema.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
};

module.exports = ventas;
