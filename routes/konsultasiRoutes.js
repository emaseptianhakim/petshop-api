const express = require('express');
const konsultasiController = require('../controllers/konsultasiController');
const router = express.Router();
const authJWT = require('../middleware/auth');

router.post('/',authJWT, konsultasiController.createKonsultasi);
router.get('/',authJWT, konsultasiController.getAllKonsultasi);
router.get('/:id',authJWT, konsultasiController.getKonsultasiById);
router.put('/:id',authJWT, konsultasiController.updateKonsultasi);
router.delete('/:id',authJWT, konsultasiController.deleteKonsultasi);

module.exports = router;
