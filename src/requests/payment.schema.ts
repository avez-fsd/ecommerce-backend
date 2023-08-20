import Joi from 'joi';

export const PaymentRequestSchema = Joi.object({
    channel: Joi.string().required()
});