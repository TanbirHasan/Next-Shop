const {modal, Schema } = require("mongoose");

const ProductSchema = new Schema({
    title : {type : String, required : true},
    description : String,
    price : {type : Number, required:true}
})


const Product = modal('product',ProductSchema)