const Product = require('../model/product')

// create new product => /api/v1/product/new
// exports.newProduct = async (req, res, next) => {
//     const product = await Product.create(req.body);

//     res.status(201).json({
//         success: true,
//         product
//     })
// }

// exports.getProducts = (req, res, next) => {
//     res.status(200).json({
//         success: true,
//         message: 'This route will show all products in database'
//     })
// }
//create new product
exports.newProduct = async (req, res, next) => {

	// req.body.user = req.user.id;
	const product = await Product.create(req.body);
	res.status(201).json({
		success: true,
		product
	})
}
exports.getProducts = async (req, res, next) => {
	const products = await Product.find();
	res.status(200).json({
		success: true,
		count: products.length,
		products
	})
}