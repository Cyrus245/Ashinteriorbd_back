const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },

    status: {
        type: Boolean,
        default: true,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model("Product", productSchema);