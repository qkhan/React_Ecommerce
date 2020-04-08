const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new mongoose.Schema(
    {
        name: {
          type: String,
          trim: true,
          required: true,
          maxlength: 32,
          unique: true,
        },
    },
    {
      timestamp: true
    }
);
categorySchema.plugin(uniqueValidator, { message: 'Error, expected Category to be unique.' });

module.exports = mongoose.model("Category", categorySchema);
