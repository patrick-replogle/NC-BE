const categoryModel = require("../../models/categories/category-models.js");

const getCategories = async (_, __, context) => {
  return categoryModel.find();
};

const getCategoryById = async (_, args, context) => {
  const category = await categoryModel.findById(args.id);
  if (category) {
    return category;
  } else {
    throw new Error("The specified category id does not exist");
  }
};

const addCategory = async (_, args, context) => {
  const found = await categoryModel
    .findBy({ category: args.input.category })
    .first();
  if (found) {
    throw new Error("Category already exists");
  } else {
    return await categoryModel.add(args.input);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  addCategory,
};
