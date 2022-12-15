import Joi from 'joi'

export const createValidationBody = Joi.object({
  description: Joi.string().required(),
  businessPlan: Joi.string().required(),
})

export const createValidationFile = Joi.object({
  fileList: Joi.any(),
}).allow(null)
