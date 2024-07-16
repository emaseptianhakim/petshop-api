const express = require('express');
const penjualanController = require('../controllers/penjualanController');
const router = express.Router();
const authJWT = require('../middleware/auth');

router.post('/',authJWT, penjualanController.createPenjualan);
router.get('/',authJWT, penjualanController.getAllPenjualan);
router.get('/:id',authJWT, penjualanController.getPenjualanById);
router.put('/:id',authJWT, penjualanController.updatePenjualan);
router.delete('/:id',authJWT, penjualanController.deletePenjualan);

module.exports = router;
