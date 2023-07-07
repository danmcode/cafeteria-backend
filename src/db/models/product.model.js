const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

class Product extends Model
{
    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true,
        }
    }
}

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    reference: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'reference'
    },
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'price'
    },
    weight: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'weight'
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'weight'
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'stock'
    }
}

module.exports = { Product , ProductSchema }