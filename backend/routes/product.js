
const express = require('express')
const router = express.Router();

const { getProducts, newProduct, getSingleProduct, updateProduct } = require('../controllers/productController')

router.route('/products').get(getProducts);

router.route('/admin/product/new').post(newProduct);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/:id').put(updateProduct);

// router.get('/products', getProducts)
// // router.post('/product/new', isAuthenticatedUser, authorizeRoles('admin'), newProduct)
// router.get('/product/:id', getSingleProduct);
// router.route('/admin/product/:id', isAuthenticatedUser, ).put(updateProduct).delete(deleteProduct);

module.exports = router;