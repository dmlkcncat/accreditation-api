import Joi from 'joi'

const participant = Joi.object({
  type: Joi.string().valid('user', 'member').required(),
  participant: Joi.string().required(),
}).required()

export const createValidation = Joi.object({
  businessPlan: Joi.string().required(),
  participantList: Joi.array().items(participant).required(),
}).required()
