import Joi from 'joi';

export const SaveToCartSchema = Joi.object({
    productId: Joi.number().required(),
    type: Joi.string().valid('ADD','REMOVE').required()
});
