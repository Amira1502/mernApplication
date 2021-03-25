//1- require express
const express = require('express');

//2- instance express
const app = express();

//4- dotenv
require('dotenv').config()

//5- connectDB
const connectDB = require ('./config/connectDB');
connectDB();
app.use(express.json())
//6- routes
app.use('/api/contact', require('./routes/contact')) 

//3-PORT
const PORT = process.env.PORT
//3-create server
app.listen(PORT, error =>
    error ? console.error(error) 
    :
     console.log(`server is running on port ${PORT}`)
    
    )