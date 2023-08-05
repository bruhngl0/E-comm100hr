import asyncHandler from "../middleware/asyncHandler.js"
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async(req,res)=> {
    const products = await Product.find({})
    res.json(products)
})



// @desc Fetch a product
// @route GET /api/products/:id
// @access Public

const getProductbyId = asyncHandler(async(req,res)=> {
    const product = await Product.findById(req.params.id)

    if(product){
    return res.json(product)
    } else{
        res.status(404)
        throw new Error('product not found')
    }
})


// @desc Create a product
// @route POST /api/products
// @access Private/admin

const createProduct = asyncHandler(async(req,res)=> {
   const product = new Product({
    name: 'sample name',
    price: 0,
    user: req.user._id,
    image: '/image/sample.jpg',
    brand: 'sample brand',
    category: 'sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description'
   })

   const createdProduct = await product.save();
   res.status(201).json(createdProduct);

});


export { getProductbyId, getProducts, createProduct }