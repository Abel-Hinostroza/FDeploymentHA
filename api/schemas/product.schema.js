const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().max(100);
const price = joi.number().integer().min(10);
const image = joi.string().uri();
const isBlock = joi.boolean();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  isBlock: isBlock.required(),
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema};
