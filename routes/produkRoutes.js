const express = require('express');
const produkController = require('../controllers/produkController');
const router = express.Router();
const authJWT = require('../middleware/auth');

router.post('/',authJWT, produkController.createProduk);
router.get('/',authJWT, produkController.getAllProduk);
router.get('/:id',authJWT, produkController.getProdukById);
router.put('/:id',authJWT, produkController.updateProduk);
router.delete('/:id',authJWT, produkController.deleteProduk);

module.exports = router;
