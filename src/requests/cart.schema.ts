import Joi from 'joi';

export const SaveToCartSchema = Joi.object({
    productId: Joi.number().required(),
    type: Joi.string().valid('ADD','REMOVE').required(),
    withSummary: Joi.boolean().required()
});

export const DeleteCartItemSchema = Joi.object({
    productId: Joi.number().required(),
    withSummary: Joi.boolean().required()
});

const productSchema = Joi.object({
    productId: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).required(),
});

export const GuestCartSummary = Joi.object({
    products: Joi.array().items(productSchema).required()
    // unique((a, b) => a.productId === b.productId)
});


