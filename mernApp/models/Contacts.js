// require mongoose
const mongoose = require('mongoose')

// contact schema
const schema = mongoose.Schema

// const schema
const contactSchema = new schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
    
    },
    phone : Number
})

module.exports = Contact = mongoose.model('contact', contactSchema)