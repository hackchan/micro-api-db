const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15)
const avatar = Joi.string().uri()
//const image = Joi.string().uri()
const email = Joi.string().email()
const password = Joi.string()

export const createUserSchema = Joi.object({
  name: name.required(),
  avatar: avatar.required(),
  email: email.required(),
  password: password.required()
})

export const updateUserSchema = Joi.object({
  name: name.required(),
  avatar: avatar,
  email: email,
  password: password
})

export const getUserSchema = Joi.object({
  id: id.required()
})
