import asyncHandler from '../middleware/asyncHandler.js'
//import User from '../models/userModel.js'


// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req,res) => {
    res.send('auth user')
})


// @desc Register User
// @route POST /api/users
// @access public

const registerUser = asyncHandler(async(req,res)=> {
    res.send('register user')
})


// @desc Logout user/ clear cookie
// @route POST /api/user/logout
// @access private


const logoutUser = asyncHandler(async(req,res)=> {
    res.send('logout user')
})

// @desc get user profile
// @route GET /api/user/profile
// @access private

const getUserProfile = asyncHandler(async(req,res)=> {
    res.send('get user profile')
})


// @desc update user profile
// @route PUT /api/user/profile
// @access private

const updateUserProfile = asyncHandler(async(req,res)=> {
    res.send('update user profile')
})

// @desc get users
// @route GET /api/users
// @access private/admin

const getUsers = asyncHandler(async(req,res)=> {
    res.send('get users')
})


// @desc get user by ID
// @route GET /api/users/:id
// @access private/admin

const getUserbyId = asyncHandler(async(req,res)=> {
    res.send('get users by id')
})




// @desc delete users
// @route DELETE /api/users/:id
// @access private/admin

const deleteUser = asyncHandler(async(req,res)=> {
    res.send('delete users')
})

// @desc ADMIN update user
// @route PUT /api/users/:id
// @access private/admin

const updateUser = asyncHandler(async(req,res)=> {
    res.send('update user')
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserbyId,
    updateUser
}