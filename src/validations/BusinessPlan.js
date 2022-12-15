import Joi from 'joi'

export const createValidation = Joi.object({
  date: Joi.date().required(),
  time: Joi.string().required(),
  responsible: Joi.string().required(),
  activity: Joi.string().required(),
  period: Joi.string().required(),
  title: Joi.string(),
  statu: Joi.bool(),
})

export const completeValidation = Joi.object({
  businessPlan: Joi.string().required(),
})
