const ProductService = require("../services/products.service");
const service = new ProductService();
const { validationResult } =  require ('express-validator');

const create = async (req, res) => {
    try {

        let errors = validationResult(req) ; 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            return res.json({errors: errors.array() });
        }

        const response = await service.create(req.body);
        res.json({ 
            success: true, 
            data: response 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            success: false, 
            message: error.message, 
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json({ 
            success: true, 
            data: response 
        });
    } catch (error) {
        res.status(500).send({ 
            success: false, 
            message: error.message,
        });
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json({ 
            success: true, 
            data: response 
        });
    } catch (error) {
        res.status(500).send({ 
            success: false, 
            message: error.message, 
        });
    }
}

const update = async (req, res) => {
    try {

        let errors = validationResult(req); 
        if ( !errors.isEmpty()) {
            console.log(errors.array());
            return res.json({errors: errors.array() });
        }

        const { id } = req.params;
        const body = await req.body;
        const response = await service.update(id, body);
        res.json({ 
            success: true, 
            data: response 
        });
    } catch (error) {
        res.status(500).send({ 
            success: false, 
            message: error.message, 
        });
    }
}

const _delete = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await service.delete(id);
        res.json({ 
            success: true, 
            data: response 
        });
    } catch (error) {
        res.status(500).send({ 
            success: false, 
            message: error.message, 
        });
    }
}

module.exports = {
    create,
    get,
    getById,
    update,
    _delete,
}

