import Joi from 'joi'

export const createValidation = Joi.object({
  title: Joi.string().required(),
  strategicGoal: Joi.string().required(),
  performanceIndicator: Joi.string().required(),
  performanceGoalCount: Joi.number().required(),
  responsible: Joi.string().required(),
  periodGoal: Joi.array().items(
    Joi.object({
      strategicPeriod: Joi.string().required(),
      goal: Joi.number().required(),
      price: Joi.number().required(),
    })
  ),
})
