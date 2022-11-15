import Joi from 'joi'

export const createValidation = Joi.object({
  periodStartYear: Joi.number().required(),
})
