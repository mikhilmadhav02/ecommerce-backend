const mongoose = require('mongoose')

const cartschema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
     image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        
    },
    total:{
        type:Number,
        required:true
    }
})

const carts = mongoose.model("carts",cartschema)
module.exports = carts