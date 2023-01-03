import Joi from 'joi'

const businessPlanType = Joi.object({
  planType: Joi.valid('business').required(),
  // activity: Joi.array().items(
  //   Joi.object({
  //     strategicActivities: Joi.string().required(),
  //   })
  // ),
  period: Joi.array().items(
    Joi.object({
      strategicPeriod: Joi.string().required(),
    })
  ),
})

const manuelPlanType = Joi.object({
  planType: Joi.valid('manuel').required(),
  // location: Joi.string().required(),
  period: Joi.string().required(),
})

const planType = Joi.string()
Joi.alternatives().try(businessPlanType, manuelPlanType).required()

export const createValidation = Joi.object({
  date: Joi.date().required(),
  time: Joi.string().required(),
  responsible: Joi.string().required(),
  activity: Joi.string(),
  period: Joi.string().required(),
  title: Joi.string(),
  statu: Joi.bool(),
  planType,
})

export const completeValidation = Joi.object({
  businessPlan: Joi.string().required(),
})
