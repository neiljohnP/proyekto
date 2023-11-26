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

//create new product => /api/v1/product/new
exports.newProduct = async (req, res, next) => {

	// req.body.user = req.user.id;
	const product = await Product.create(req.body);
	res.status(201).json({
		success: true,
		product
	})
}

// get all products => /api/v1/products
exports.getProducts = async (req, res, next) => {

	const products = await Product.find();

	res.status(200).json({
		success: true,
		count: products.length,
		products
	})
} 

// get all single product details => /api/v1/product/:id
exports.updateProduct = async (req, res, next) => {
        
        let product = await Product.findById(req.params.id);

        if(!product) {
            return res.status(404).json({
                success: false,
                message: 'product not found'
            })
        }
        product = await product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            product
        })
    }

    // update product => /api/v1/product/:id
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.send(200).json({
        success: true,
        product
    })
}