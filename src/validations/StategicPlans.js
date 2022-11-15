import Joi from 'joi'

export const createValidation = Joi.object({
  title: Joi.string().required(),
  strategicSystem: Joi.string().required(),
})
