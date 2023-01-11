import Joi from 'joi'

export const createValidation = Joi.object({
  fullName: Joi.string().required(),
  mail: Joi.string().required(),
  telephone: Joi.string().required(),
  userRole: Joi.string().required(),
  password: Joi.string(),
})

export const loginValidation = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const changePasswordValidation = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().required(),
  newPassword: Joi.string().required(),
})

export const refreshTokenValidation = Joi.object({
  refreshToken: Joi.string().required(),
})

export const avatarValidation = Joi.object({
  photo: Joi.any(),
})
