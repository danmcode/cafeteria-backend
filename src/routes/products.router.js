const express = require("express");
const router = express.Router();
const productController = require('../controllers/products.controller');
const { createProductCheck } = require("../libs/validators");

router
    .get('/', productController.get)
    .get('/:id', productController.getById)
    .post('/', createProductCheck(), productController.create)
    .put('/:id', createProductCheck(),productController.update)
    .delete('/:id', productController._delete);

module.exports = router;