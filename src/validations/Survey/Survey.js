import Joi from 'joi'

const textQuestion = Joi.object({
  questionType: Joi.valid('text').required(),
  required: Joi.boolean().required(),
  question: Joi.object({
    title: Joi.string().required(),
  }).required(),
}).required()

const selectQuestion = Joi.object({
  questionType: Joi.valid('select').required(),
  required: Joi.boolean().required(),
  question: Joi.object({
    title: Joi.string().required(),
    multiSelect: Joi.boolean().required(),
    options: Joi.array()
      .items(
        Joi.object({
          option: Joi.string().required(),
        })
      )
      .required(),
  }).required(),
}).required()

const rateQuestion = Joi.object({
  questionType: Joi.valid('rate').required(),
  required: Joi.boolean().required(),
  question: Joi.object({
    title: Joi.string().required(),
    columnOptions: Joi.array()
      .items(
        Joi.object({
          column: Joi.string().required(),
        })
      )
      .required(),
    rowOptions: Joi.array().items(
      Joi.object({
        row: Joi.string().required(),
      })
    ),
  }).required(),
}).required()

const questions = Joi.array()
  .items(Joi.alternatives().try(textQuestion, selectQuestion, rateQuestion))
  .required()

export const createValidation = Joi.object({
  title: Joi.string().required(),
  firstTitle: Joi.string().required(),
  finishTitle: Joi.string().required(),
  active: Joi.boolean().required(),
  questions,
})
