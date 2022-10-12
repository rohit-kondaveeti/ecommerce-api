const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {type: String, required : true},
        quantity : { type : Number, required : true}
    },
    { timestamps : true }
);

module.exports = mongoose.model('Product', ProductSchema)