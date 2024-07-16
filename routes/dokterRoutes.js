const express = require('express');
const router = express.Router();

const dokterController = require('../controllers/dokterController');
const authJWT = require('../middleware/auth');

router.post('/',authJWT, dokterController.createDokter);
router.get('/',authJWT, dokterController.getAllDokter);
router.get('/:id',authJWT, dokterController.getDokterById);
router.put('/:id',authJWT, dokterController.updateDokter);
router.delete('/:id',authJWT, dokterController.deleteDokter);

module.exports = router;
