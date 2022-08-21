const Name = require("../models/nameModel");
const controller = {};

controller.getNames = async (req, res, next) => {
  const result = await Name.find({});
  res.locals.names = result;
  // console.log('inside of get names middleware')
  return next();
};


controller.addName = async (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  const post = new Name({ name });
  await post.save();
  res.locals.message = "Name Added";
  return next();
};

module.exports = controller;
