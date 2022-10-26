import Joi from 'joi'

export const createValidation = Joi.object({
  title: Joi.string().required(),
  periodStartYear: Joi.number().required(),
})
