// require mongoose
const mongoose = require('mongoose');
// connect db 
const connectDB = async() =>{
    try{
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    console.log(`Database is connected...`)
 }
  catch (error) {
        console.error(`Connection is failed...${error}`)
    }

}
module.exports = connectDB