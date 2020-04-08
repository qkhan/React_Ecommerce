const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          trim: true,
          required: true,
          maxlength: 32
        },
        description: {
          type: String,
          trim: true,
          required: true,
          maxlength: 32
        },
        price: {
          type: Number,
          trim: true,
          required: true,
          maxlength: 32
        },
        category: {
          type: ObjectId,
          ref: 'Category',
          required: true
        },
        quantity: {
          type: Number
        },
        sold: {
          type: Number
        },
        photo: {
          data: Buffer,
          contentType: String
        },
        shipping: {
          required: false,
          type: Boolean
        },
    },
    {
      timestamp: true
    }
);

module.exports = mongoose.model("Product", productSchema);