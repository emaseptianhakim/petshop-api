const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();
const authJWT = require ('../middleware/auth');

router.post('/',authJWT, customerController.createCustomer);
router.get('/', authJWT,customerController.getAllCustomer);
router.get('/:id',authJWT, customerController.getCustomerById);
router.put('/:id',authJWT, customerController.updateCustomer);
router.delete('/:id',authJWT, customerController.deleteCustomer);

module.exports = router;
