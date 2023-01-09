import Joi from 'joi'

export const createValidation = Joi.object({
  businessPlan: Joi.string().required(),
})
