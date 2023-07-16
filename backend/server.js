import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


import productRoutes from './routes/productRoutes.js'


const port = process.env.PORT || 2121;


connectDB() //connect to mongoDB
const app = express()


app.get('/' , (req,res) => {
    res.send("api running")
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`running on ${port}`)
})