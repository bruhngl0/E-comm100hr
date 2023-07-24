import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

//protect routes

const protect = asyncHandler(async(req,res,next)=> {
    let token;

    //read the jwt from cookie

    token = req.cookies.jwt;

    if (token){
        try {
            //DECODES THE user._id sent in the payload
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            next();

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('not authorized, token failed')
        }

    }else{
        res.status(401)
        throw new Error('not authorized, no token')
    }


})




//Admin Middleware

const admin = (req,res,next) => {
    if(req.user && req.user.isAdmin){
        next()
    } else{
        res.status(401);
        throw new Error('Not Authorized as admin')
    }
}

export {
    protect,
    admin,
}
