const { Product, ProductSchema } = require("./product.model");

const setupModels = (sequelize) => {
    Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;