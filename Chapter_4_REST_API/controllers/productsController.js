const Product = require("../models/productModel.js");

//! getAllProducts
const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(error){
        res.status(500);
        console.log(error.message)
    }
}

//! getProductByID
const getProductByID = async (req, res) => {
    try{
        const product = await Product.find({_id: req.params.id});
        res.json(product);
    }
    catch(error){
        res.status(500);
        console.log(error.message)
    }
}

//! addProduct
const addProduct = async (req, res) => {
    const {name, category, price, stock} = req.body;

    const newProduct = new Product({
        name,
        category,
        price, stock
    })

    try{
        const saveProduct = await newProduct.save();
        res.status(201).json(saveProduct);
    }
    catch(error){
        res.status(500);
        console.log(error.message);
    }
}

module.exports = {getAllProducts, getProductByID, addProduct}