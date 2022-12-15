import Joi from 'joi'

export const createValidation = Joi.object({
  heading: Joi.string().required(),
  rota: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      rota2: Joi.array().items(
        Joi.object({
          title2: Joi.string().required(),
        })
      ),
    })
  ),
})
