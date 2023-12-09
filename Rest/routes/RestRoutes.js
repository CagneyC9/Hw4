const express = require('express');
const router = express.Router();
const path = require('path');
const CustomerController = require("../controllers/CustomerController");
const productController = require("../controllers/productController")
const salesController = require("../controllers/salesController")

//Routes for the customer
router.get( '/customer/:id', CustomerController.getCustomerDetails);
router.get('/customer', CustomerController.getCustomer)
router.post( '/customer', CustomerController.addCustomer);
router.put( '/customer/:id', CustomerController.updateCustomer);
router.delete('/customer/:id', CustomerController.deleteCustomer);
//Routes for the product
router.get('/product', productController.getProduct)
router.get( '/product/:id', productController.getProductDetails);
router.post( '/product', productController.addProduct);
router.put( '/product/:id', productController.updateProduct);
// router.delete( '/product/:id', productController.deleteProduct);

//Routes for the sales
router.get('/sales', salesController.getSales)
router.get('/month', salesController.getMonth)


exports.routes = router;