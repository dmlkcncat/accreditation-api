import Joi from 'joi'

export const createValidation = Joi.object({
  fullName: Joi.string().required(),
  mail: Joi.string().required(),
})
