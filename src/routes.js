const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carros:codigo', CarroController.buscarUm);
router.post('/carros', CarroController.inserir);
router.put('/carros/:codigo', CarroController.alterar);
router.delete('/carros/:codigo', CarroController.excluir);

module.exports = router;