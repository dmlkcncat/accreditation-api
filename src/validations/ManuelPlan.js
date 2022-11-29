import Joi from 'joi'

export const createValidation = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.string().required(),
  responsible: Joi.string().required(),
  period: Joi.string().required(),
  location: Joi.string(),
  statu: Joi.bool(),
})
