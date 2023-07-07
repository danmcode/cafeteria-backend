const { body } = require("express-validator");

const createProductCheck = () => {
    return [
        body('name').trim().not().isEmpty()
        .withMessage('El nombre del producto no puede estar vacío'),

        body('reference').trim().not().isEmpty()
        .withMessage('La referencia del producto no puede estar vacía'),

        body('price').trim().not().isEmpty()
        .withMessage('El precio del producto no puede estar vacío')
        .isDecimal().custom(value => value > 0)
        .withMessage("El precio no puede ser negativo"),

        body('weight').trim().not().isEmpty()
        .withMessage('El peso del producto no puede estar vacío')        
        .isDecimal().custom(value => value > 0)
        .withMessage("El peso no puede ser negativo"),

        body('category').trim().not().isEmpty()
        .withMessage('La categoria no puede estar vacia'),

        body('stock').trim().not().isEmpty()
        .withMessage('El stock del producto no puede estar vacío')
        .isNumeric().custom(value => value > 0)
        .withMessage('El stock del producto no puede ser negativo'),
    ]
}

module.exports = {
    createProductCheck,
}