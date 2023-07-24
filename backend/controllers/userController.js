import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req,res) => {
    
    const { email, password } = req.body

    const user = await User.findOne({email: email})

    if(user && (await user.matchPassword(password))){
        generateToken(res, user.id)
       

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(401)
        throw new Error('Invalid Username or Password')
    }
    
})


// @desc Register User
// @route POST /api/users
// @access public

const registerUser = asyncHandler(async(req,res)=> {
    const { name, email, password} =  req.body

    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error('user already exists')
    } else{
        const user = await User.create({
            name,
            email,
            password,
        })

        if (user){

            generateToken(res, user.id)

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: true,
            })

          } else{
                res.status(400)
                throw new Error('Invalid user data')
            }
        
        }    
})



// @desc Logout user/ clear cookie
// @route POST /api/user/logout
// @access private


const logoutUser = asyncHandler(async(req,res)=> {
   res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
   })

   res.status(200).json({message: 'Logged Out Successfully'})
})

// @desc get user profile
// @route GET /api/user/profile
// @access private

const getUserProfile = asyncHandler(async(req,res)=> {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: true,
        })
    }else{
        res.status(404)
        throw new Error('user not found')
    }
})


// @desc update user profile
// @route PUT /api/user/profile
// @access private

const updateUserProfile = asyncHandler(async(req,res)=> {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('user not found')
    }


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