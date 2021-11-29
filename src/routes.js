const express = require('express');
const router = express.Router();

const CalcularController = require('./controllers/CalcularController');

//calcular
router.post('/calcular', CalcularController.calcular);

module.exports = router;