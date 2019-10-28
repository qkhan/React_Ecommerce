const { errorHandler } = require("../helpers/dbErrorHandler");
const Category = require("../models/category");

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec( (err, category) => {
       if (err || !category) {
         return res.status(400).json({
           error: "Category does not exist"
         });
       }
       req.category = category;
       next();
    });
};

exports.list = (req, res) => {
    Category.find().exec( (err, data) => {
       if (err) {
         return res.status(400).json({
           error: errorHandler(err)
         });
       }
       res.json(data);
    });
};

exports.read = (req, res) => {
    return res.json(req.category);
}

exports.remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedCategory) => {
        if (err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
        }
        res.json({
          deletedCategory,
          message: "Category deleted successfully"
        })
    });
};

exports.update = (req, res) => {
  console.log("Request");
  console.log(req.body);
  const category = req.category
  category.name = req.body.name
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json( { data });
  });
};

exports.create = (req, res) => {
  console.log("Request");
  console.log(req.body);
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json( { data });
  });
};
