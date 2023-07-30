import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'


// @desc Create new Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async(req,res)=>{
    res.send('add order Items')
});


// @desc Get Logged in users orders
// @route GET /api/orders/mine
// @access Private
const getMyOrders = asyncHandler(async(req,res)=>{
    res.send('get my orders')
});


// @desc get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async(req,res)=>{
    res.send('get order by id')
});


// @desc update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
const  updateOrderToPaid = asyncHandler(async(req,res)=>{
    res.send('update to paid')
});

// @desc update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
const  updateOrderToDelivered = asyncHandler(async(req,res)=>{
    res.send('update to delivered')
});

// @desc Get all orders
// @route get /api/orders/
// @access Private/Admin
const  getOrders = asyncHandler(async(req,res)=>{
    res.send('get all orders')
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders,
}

