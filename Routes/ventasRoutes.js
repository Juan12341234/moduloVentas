const {Router} = require('express');

const router = Router();

const {mostrarVentas} = require('../Controller/ventasController');

router.get('/ventas', mostrarVentas);

module.exports = router;